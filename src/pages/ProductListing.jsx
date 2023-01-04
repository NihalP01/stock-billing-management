import { Box } from "@mui/material";
import React from "react";
import { Controls } from "../components/controls/Controls";

const ProductListing = () => {
  
  const data = JSON.parse(localStorage.getItem("product_data"));

  return (
    <Box>
      {!data ? (
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
