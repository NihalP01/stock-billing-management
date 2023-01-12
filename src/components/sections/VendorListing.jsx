import { Box } from "@mui/material";
import React from "react";
import { Controls } from "../controls/Controls";

const VendorListing = () => {
  const data = JSON.parse(localStorage.getItem("added_vendor"));

  return (
    <Box>
      <h4>Vendor List</h4>
      {!data ? (
        <div>
          <h1>No data</h1>
        </div>
      ) : (
        <Box>
          {data.map((item, index) => (
            <Controls.CustomList
              key={index}
              heading={"Name: " + item.vendorName}
              prodDes={"Address: " + item.vendorAddress}
              prodDesSecond={"State: " + item.state}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default VendorListing;
