import * as React from "react";

import { useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({ options, label, value, updateFilter }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 190 }} size="small">
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
