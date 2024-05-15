import React from "react";
import "./hero.style.css";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import headphone from "./headphone.png";

export default function Hero() {
  return (
    <Stack
      className="background"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container className="mainColumn">
        <Grid item md={8} className="center">
          <h2 className="adjust">100 Thousand Songs, ad-free</h2>
          <h2 className="adjust">Over thousands podcast episodes</h2>
        </Grid>
        <Grid item md={4} className="center">
          <img
            src={headphone}
            alt="Logo"
            style={{ width: "auto", height: "70%" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
