import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Users List</Link>
          </Typography>

          <Button color="inherit">
            <Link to="/users">Users List</Link>
          </Button>
          <Button color="inherit">
            <Link to="/addUser">Add User</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
