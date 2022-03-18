import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="info"
            onClick={handleClickOpen}
          >
            <InfoIcon />
          </IconButton>
          
          <AboutModal open={open} handleClose={handleClose} />
          <Typography textalign="center" component={"span"} variant="h4">
            SHOPPING ASSISTANCE
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
