const { DateTimeResolver, GUIDResolver } = require("graphql-scalars");

module.exports = {
  DateTime: DateTimeResolver,
  DataResult: {
    __resolveType: (obj) => {
      if (obj.username) return "User";
      if (obj.title) return "Post";

      return null;
    },
  },

  Query: {
    helloWorld: () => "Hello World",
  },
};
