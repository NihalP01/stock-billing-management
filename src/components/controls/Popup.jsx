import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Controls } from "./Controls";
import { Box } from "@mui/material";

export default function Popup(props) {
  const { title, btnText, content, children } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Controls.CustomButton text={btnText} onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Controls.CustomButton onClick={handleClose} text={"Cancel"} color='error' />
          <Controls.CustomButton onClick={handleClose} text={"Submit"} color='success' />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
