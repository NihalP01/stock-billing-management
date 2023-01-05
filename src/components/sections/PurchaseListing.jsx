import { Box, Typography } from "@mui/material";
import React from "react";

const PurchaseListing = () => {
  const data = JSON.parse(localStorage.getItem("added_purchase"));
  return (
    <Box>
      <h4>Purchase List</h4>
      {!data ? (
        <div>
          <h1>No data</h1>
        </div>
      ) : (
        <Box display={"flex"}>
          {data.map((item, index) => (
            <Box m={1} p={2} borderRadius={1} boxShadow={2} key={index}>
              <Typography textAlign={"left"}>
                Invoice No: {item.invoiveNo}
              </Typography>
              <Typography textAlign={"left"}>
                Invoice Date: {item.invoiveDate}
              </Typography>
              <Typography textAlign={"left"}>Vendor: {item.vendor}</Typography>
              <Typography textAlign={"left"}>
                Purchase Type: {item.type}
              </Typography>
              <Typography
                fontWeight={"bold"}
                style={{ textDecoration: "underline" }}
                gutterBottom
              >
                Items
              </Typography>
              {item.addedItems.map((item, index) => (
                <Box key={index}>
                  <Typography textAlign={"left"}>
                    Product Name: {item.product}
                  </Typography>
                  <Typography textAlign={"left"}>
                    Product Quantity: {item.quantity}
                  </Typography>
                  <Typography textAlign={"left"}>
                    Product Rate: {item.rate}
                  </Typography>
                  <Typography textAlign={"left"}>
                    Product ST: {item.gst}%
                  </Typography>
                  <Typography textAlign={"left"}>
                    Total: {item.total}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PurchaseListing;
