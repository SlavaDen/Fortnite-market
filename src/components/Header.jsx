import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Fortnite Market
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
