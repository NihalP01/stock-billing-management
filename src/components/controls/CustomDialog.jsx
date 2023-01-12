import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Controls } from "./Controls";

const CustomDialog = (props) => {
  const { title, content, open, handleClose } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Controls.CustomButton
          onClick={handleClose}
          text={"Okay"}
          color="success"
        />
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
