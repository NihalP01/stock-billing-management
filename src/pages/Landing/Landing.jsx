import React from "react";
import Navbar from "../../components/common/Navbar";
import Homepage from "../../components/sections/Homepage";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Landing = () => {
  return (
    <Box>
      <Navbar />
      <Homepage />
    </Box>
  );
};

export default Landing;
