import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
let Nav = () => {
  const [navbar, setNavbar] = useState(false);
  let h = getWindowDimensions();
  const changeBackground = () => {
    if ((window.scrollY / h.height) * 100 >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="Nav">
      <AppBar
        style={
          navbar
            ? {
                backgroundColor: "#2f4850",
                position: "fixed",
              }
            : {
                backgroundColor: "#ffffff00",
                position: "fixed",
                boxShadow: "none",
              }
        }
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
