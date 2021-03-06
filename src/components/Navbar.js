import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AboutModal from "./AboutModal";
import useModal from "../utilities/useModal";



const Navbar = () => {
  const { open, handleClickOpen, handleClose } = useModal();

  return (
    <Grid>
      <AppBar position="static" style={{ background: "#936af5" }}>
        <Toolbar>
          <AboutModal open={open} handleClose={handleClose} />
          <div className="navbar"> 
          <h1 className="navbarTitle" > 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SHOPPING&nbsp;&nbsp;ASSISTANCE
          </h1>
          </div>
          <IconButton
            className="Icon"
            edge="end"
            color="inherit"
            aria-label="info"
            onClick={handleClickOpen}
            // iconContainerStyle={{marginRight: 50 }}
          >
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

     <p></p>
    </Grid>

  );
};

export default Navbar;
