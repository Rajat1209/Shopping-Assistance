import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@material-ui/core";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import useModal from "../utilities/useModal";
import TranslationModal from "./TranslationModal";

const useStyles = makeStyles({
  table: {
    minWidth: window.width,
    
  }
});
const PredictionsTable = ({ predictions }) => {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper} >
      <Table  className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Translate</TableCell>
            <TableCell align="center">Predictions</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Links for Shopping</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {predictions.map(prediction => (
            <PredictionRow key={prediction.className} prediction={prediction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PredictionsTable;

const PredictionRow = ({ prediction }) => {
  const { open, handleClickOpen, handleClose } = useModal();
  const amazonURL="https://www.amazon.in/s?k="+prediction.className;
  const googleURL="https://www.google.com/search?q="+prediction.className;
  const flipkartURL=" https://www.flipkart.com/search?q="+prediction.className;

  return (
    <TableRow>
      <TableCell align="left" scope="row" style={{ width: "2%" }}>
        <IconButton
          variant="outlined"
          color="secondary"
          onClick={handleClickOpen}
        >
          <GTranslateIcon />
        </IconButton>
        {open && (
          <TranslationModal
            component={`span`}
            words={prediction.className}
            open={open}
            handleClose={handleClose}
          />
        )}
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        style={{ fontWeight: "bold", width: "20%" }}
      >
        {prediction.className}
      </TableCell>
      <TableCell align="center" style={{ width: "20%" }}>
         <a href={amazonURL} target="_blank">Amazon</a>
      </TableCell>
      <TableCell align="center" style={{ width: "20%" }}>
        <a href={googleURL} target="_blank">Google</a>
      </TableCell>
      <TableCell align="center" style={{ width: "20%" }}>
      <a href={flipkartURL} target="_blank">Flipkart</a>
       </TableCell>
    </TableRow>
  );
};
