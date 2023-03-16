import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Button, Typography, TextField, Grid } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const { setIsAuth } = useUserAuth();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const onSignInClick = () => {
    navigate("/login");
  };

  return (
    <Grid container rowGap={"20px"}>
      <Grid item>
        {error && <Typography color="error">{error}</Typography>}
      </Grid>
      <Grid item xs={12}>
        <TextField
          xs={12}
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <Button fullWidth onClick={handleSubmit} variant="contained">
          Sign Up
        </Button>
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" xs={12}>
        <Typography>Already have an account?</Typography>{" "}
        <Button variant="transparent" onClick={onSignInClick}>
          Sign In!
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUp;
