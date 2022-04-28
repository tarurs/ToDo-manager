import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(90deg, rgb(49 124 210) 0%, rgb(135 135 135) 100%)",
        }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            ToDo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
