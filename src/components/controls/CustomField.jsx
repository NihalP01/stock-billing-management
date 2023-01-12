import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledField = styled(TextField)(({
  //reserved
}));

const CustomField = (props) => {
  const { variant, size, type, label, ...others } = props;
  return (
    <>
      <Typography variant="body2" gutterBottom textAlign={"left"}>
        {label}
      </Typography>
      <StyledField
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
