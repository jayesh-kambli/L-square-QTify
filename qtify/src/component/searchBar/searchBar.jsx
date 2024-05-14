import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import "./searchBar.style.css";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Search() {
  return (
    <Stack
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
        <Grid container className="innerBox">
          <Grid item md={11} className="removePadding">
            <InputBase
              placeholder="Search a album of your choice"
              inputProps={{ "aria-label": "search" }}
              sx={{
                "& .MuiInputBase-input": {
                  borderRadius: 0,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  marginInlineStart: "20px",
                },
              }}
              className="searchBar"
            />
          </Grid>
          <Grid item md={1} className="removePadding searchButtonSectoion">
            <SearchIcon style={{ color: "black" }} />
          </Grid>
        </Grid>
    </Stack>
  );
}
