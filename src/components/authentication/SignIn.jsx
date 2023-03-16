import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";

const SignIn = () => {
  return (
    <div className="signUp">
      <div className="authentication">
        <GoogleAuth />
        <Grid container rowGap={"20px"}>
          <Grid item xs={12}>
            <TextField
              xs={12}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: "100%" }}
              xs={12}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignIn;
