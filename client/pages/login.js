import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
export default function login() {
  const [state, setstate] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
          <Card variant="outlined" style={{ height: "300px" }}>
            <CardContent>
              <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h4">Login</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={state.username}
                      onChange={onChange}
                      fullWidth
                      label="Enter your Username"
                      name="username"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={state.password}
                      onChange={onChange}
                      fullWidth
                      type="password"
                      label="Enter your Password"
                      name="password"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" size="large">
                      Login
                    </Button>
                  </Grid>

                  <div>
                    {state.username} {state.password}
                  </div>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
