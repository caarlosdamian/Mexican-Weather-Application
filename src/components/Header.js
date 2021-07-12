import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Wheather
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
