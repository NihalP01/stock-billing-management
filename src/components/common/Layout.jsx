import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ headerName, children }) => {
  return (
    <>
      <Sidebar sidebarHeader={headerName} />
      <Box style={{ display: "flex", justifyContent: "center" }} mt={12} ml={"300px"}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
