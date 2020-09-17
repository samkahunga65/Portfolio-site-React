import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

let Nav = () => {
  return (
    <div className="Nav">
      <AppBar
        style={{
          backgroundColor: "#2f4850",
          position: "fixed",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6">Kahunga</Typography>
          <div className="Nav-Buttons">
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Nav;
