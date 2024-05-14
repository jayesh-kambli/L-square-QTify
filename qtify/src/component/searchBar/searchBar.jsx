import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import "./searchBar.style.css";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Search() {
  return (
    // <Stack
    //   container
    //   direction="row"
    //   alignItems="center"
    //   justifyContent="space-between"
    //   className="cust"
    // >
    //       <Stack>
    //         <InputBase
    //           placeholder="Search a album of your choice"
    //           inputProps={{ "aria-label": "search" }}
    //           sx={{
    //             "& .MuiInputBase-input": {
    //               borderRadius: 0, // Remove border-radius
    //               border: "none", // Remove border
    //               outline: "none", // Remove outline
    //               backgroundColor: "transparent", // Set background color to transparent
    //               margin: "5px",
    //               marginInlineStart: '20px',
    //               width: "23.5rem",
    //             },
    //           }}
    //         />
    //       </Stack>
    //       <Stack
    //         alignItems="center"
    //         justifyContent="center"
    //         className="searchSection"
    //       >
    //         <SearchIcon style={{ color: "black" }} />
    //       </Stack>
    // </Stack>
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
                  borderRadius: 0, // Remove border-radius
                  border: "none", // Remove border
                  outline: "none", // Remove outline
                  backgroundColor: "transparent", // Set background color to transparent
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
