import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";

export default function CustomList(props) {
  const { heading, prodDes, prodDesSecond } = props;
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={heading}
          secondary={prodDes + " " + prodDesSecond}
        />
      </ListItem>
      <Divider />
    </List>
  );
}
