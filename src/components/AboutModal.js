import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import { Typography, Dialog, IconButton } from "@material-ui/core";
import whatisthis from "./pic1.png";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
    
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),

  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography  component={"span"} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          color="secondary"
          
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const AboutModal = ({ open, handleClose }) => {
  return (
    <Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
  
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {"About       "}
          <img alt="logo" src={whatisthis} width="40px" height="40px" />
        </DialogTitle>
        <DialogContent dividers>
          <Typography align="center" component={"span"}  gutterBottom>
            This web application will help you find the product you want at 
            for various website and also help you know the name of the product
            in various names as you wish.
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography component={"span"} gutterBottom>
            Take a photo of a single object with good lighting and as little 
            background noise as possible. Enjoy Shopping!
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography component={"span"} gutterBottom>
            Made by: Ekansh, Rajat, Nikhil
          </Typography>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </Card>
  );
};

export default AboutModal;
