import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const CustomSelect = (props) => {
  const { value, onChange, label, options, ...other } = props;
  return (
    <FormControl fullWidth>
      <Typography variant="body2" textAlign={"left"} gutterBottom>{label}</Typography>
      <Select value={value} onChange={onChange} size="small" {...other}>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
