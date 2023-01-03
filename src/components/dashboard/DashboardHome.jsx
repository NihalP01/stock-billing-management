import { Box } from "@mui/material";
import React from "react";
import ProductListing from "../../pages/ProductListing";

const DashboardHome = () => {
  return (
    <Box>
      <h4>This is Dashboard</h4>
      <ProductListing />
    </Box>
  );
};

export default DashboardHome;
