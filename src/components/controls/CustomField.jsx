import { TextField, Typography } from "@mui/material";
import React from "react";

const CustomField = (props) => {
  const { variant, size, type, label, ...others } = props;
  return (
    <>
      <Typography variant="body2" gutterBottom textAlign={"left"}>
        {label}
      </Typography>
      <TextField
        variant={variant ? "outlined" : variant}
        type={type}
        size={size ? "small" : size}
        fullWidth
        {...others}
      />
    </>
  );
};

export default CustomField;
