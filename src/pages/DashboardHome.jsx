import { Box } from "@mui/material";
import React from "react";
import { Sections } from "../components/sections/Sections";

const DashboardHome = () => {
  return (
    <Box>
      <Sections.ProductListing />
      <Sections.PurchaseListing />
      <Sections.VendorListing />
    </Box>
  );
};

export default DashboardHome;
