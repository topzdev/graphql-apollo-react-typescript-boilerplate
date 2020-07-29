const jwt = require("jsonwebtoken");
const config = require("../config");
const models = require("../modules/models");
const ms = require("ms");
const { ACCESS_TOKEN_EXPIRE, REFRESH_TOKEN_EXPIRE } = require("../constants");

const createToken = (user) => {
  const refreshToken = jwt.sign(
    { id: user.id, count: user.count },
    config.jwtSecret,
    { expiresIn: REFRESH_TOKEN_EXPIRE }
  );
  const accessToken = jwt.sign({ id: user.id }, config.jwtSecret, {
    expiresIn: ACCESS_TOKEN_EXPIRE,
  });

  return { refreshToken, accessToken };
};

const setCookies = ({ refreshToken, accessToken }, res) => {
  res.cookie("refresh-token", refreshToken);
  res.cookie("access-token", accessToken);
};

const clearCookies = () => {
  res.clearCookie("refresh-token");
  res.clearCookie("access-token");
};

const sliceToken = (token) => {
  if (token && token.startsWith("Bearer ")) return token.slice(7, token.length);

  return token;
};

const decodeToken = async (req, res, next) => {
  let accessToken = req.cookies["access-token"];
  let refreshToken = req.cookies["refresh-token"];

  console.log(accessToken, refreshToken);
  if (!accessToken && !refreshToken) return next();

  accessToken = sliceToken(accessToken);
  refreshToken = sliceToken(refreshToken);

  try {
    const user = jwt.verify(accessToken, config.jwtSecret);
    req.user = user;
    return next();
  } catch {}

  if (!refreshToken) return next();
  let user;
  try {
    user = jwt.verify(refreshToken, config.jwtSecret);
    console.log("Access token is not goood");
  } catch {
    next();
  }
  const checkUser = await models.User.findByPk(user.id);

  /* check the count of the user in that database and compare it with the token user count 
     if the count not match then clear the cookies and update reset the count to 0 (zero) otherwise 
     continue.
    */

  if (!checkUser.get({ plain: true }) || checkUser.count !== user.count) {
    console.log("Refresh token is not valid you need to login.");
    return next();
  }

  console.log("Refresh token is all good");

  setCookies(createToken(checkUser), res);
  req.user = checkUser;
  next();
};

module.exports = {
  createToken,
  setCookies,
  decodeToken,
};
