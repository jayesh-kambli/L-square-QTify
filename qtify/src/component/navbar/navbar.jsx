import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./navbar.style.css";
import logo from "./logo.png";
import Stack from "@mui/material/Stack";
import SearchBar from "../searchBar/searchBar";
import styledd from 'styled-components';
import Button from "../button/button"

// const Button = styledd.button`
//   font-family: 'Poppins', sans-serif;
//   /* Add more styles as needed */
// `;

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg">
        <Toolbar width="100%">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="maxWidth"
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "80px", height: "100%" }}
                />
              </IconButton>
            </Stack>
            <SearchBar />
            <Stack>
              <Button text="Give Feedback" />
              {/* <Button className="feedbackButton">Give Feedback</Button> */}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
