import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const CustomTable = (props) => {
  const { addedItems, columns } = props;
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell kye={column.id}>{column.value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {addedItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.product}
              </TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.rate}</TableCell>
              <TableCell align="right">{item.gst}</TableCell>
              <TableCell align="right">{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
