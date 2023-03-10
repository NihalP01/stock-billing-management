import { Box } from "@mui/material";
import React from "react";

const FormLayout = ({ children }) => {
  return (
    <Box p={4} ml={3} mr={3} width={'100%'} maxWidth={"100%"} boxShadow={2} borderRadius={2}>
      {children}
    </Box>
  );
};

export default FormLayout;
