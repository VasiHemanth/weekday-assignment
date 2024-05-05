import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Input({ label, value, updateFilter }) {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "19ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label={label}
        id="outlined-size-small"
        defaultValue={value}
        size="small"
        onChange={handleInputChange}
      />
    </Box>
  );
}
