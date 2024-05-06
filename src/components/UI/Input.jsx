import React from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Input({ label, value, updateFilter }) {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: matchesSm ? "100%" : 400 },
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
