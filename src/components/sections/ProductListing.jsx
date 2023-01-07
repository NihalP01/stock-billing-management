import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const ProductListing = () => {
  const data = JSON.parse(localStorage.getItem("product_data"));

  const columns = [
    {
      id: 1,
      value: "Name",
    },
    {
      id: 2,
      value: "Category",
    },
    {
      id: 3,
      value: "GST",
    },
  ];

  return (
    <Box>
      <h4>Product List</h4>
      {!data ? (
        <div>
          <h1>No data</h1>
        </div>
      ) : (
        <Box>
          {data.length > 0 && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell align="right" kye={column.id}>
                        <Typography variant="body2" fontWeight={"bold"}>
                          {column.value}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.category}</TableCell>
                      <TableCell align="right">{item.gst}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProductListing;

// <Controls.CustomList
// key={index}
// heading={"Name: " + item.name}
// prodDes={"GST: " + item.gst}
// prodDesSecond={"Category: " + item.category}
// />
