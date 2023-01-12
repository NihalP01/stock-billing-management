import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FormLayout from "../components/common/FormLayout";
import { Controls } from "../components/controls/Controls";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "/stock";
  };

  return (
    <Box>
      <Grid
        container
        spacing={5}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
        }}
      >
        <Grid item xs={5}>
          <img
            width="100%"
            src={`${process.env.PUBLIC_URL}/assets/images/login.jpg`}
            alt='login'
          />
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <FormLayout>
              <LockIcon fontSize="large" color="primary" />
              <Typography fontSize={"1.2rem"} gutterBottom>
                Login
              </Typography>
              <Grid item mt={2} xs={12}>
                <Controls.CustomField
                  label={"Email"}
                  type="email"
                  size="small"
                />
              </Grid>
              <Grid item mt={2} xs={12}>
                <Controls.CustomField
                  label={"Password"}
                  type="password"
                  size="small"
                />
              </Grid>
              <Controls.CustomButton
                style={{ marginTop: "2rem" }}
                text="Login"
                onClick={handleLogin}
              />
              <Box style={{ cursor: "pointer" }}>
                <Typography fontSize={"0.9rem"} mt={1}>
                  Don't have an account? Sign Up
                </Typography>
              </Box>
            </FormLayout>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
