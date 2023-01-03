import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  const {text, color} = props;
  return (
    <Button
      variant="contained"
      style={{ textTransform: "none" , width: '100px', fontSize: '0.9rem', borderRadius: '0.7rem'}}
      size="small"
      color={color}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
