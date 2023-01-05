import { Box } from "@mui/material";
import React from "react";
import { Controls } from "../controls/Controls";

const ProductListing = () => {
  
  const data = JSON.parse(localStorage.getItem("product_data"));

  return (
    <Box>
      <h4>Product List</h4>
      {data.length === 0 ? (
        <div>
          <h1>No data</h1>
        </div>
      ) : (
        <Box>
          {data.map((item, index) => (
            <Controls.CustomList
              key={index}
              heading={"Name: " + item.name}
              prodDes={"GST: " + item.gst}
              prodDesSecond={"Category: " + item.category}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductListing;
