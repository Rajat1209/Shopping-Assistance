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
    minWidth: window.width
  }
});
const PredictionsTable = ({ predictions }) => {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Translate</TableCell>
            <TableCell>Predictions</TableCell>
            <TableCell></TableCell>
            <TableCell align="left">Links for Shopping</TableCell>
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
      <TableCell align="right" style={{ width: "30%" }}>
         <a href="https://www.amazon.in/s?k={prediction.className}">Amazon</a>
          {/* https://www.google.com/search?q={prediction.className}
          https://www.flipkart.com/search?q={prediction.className} */}
          
        {/* {href="https://developers.google.com/web/fundamentals/web-app-manifest/"} */}
      </TableCell>
      <TableCell align="right" style={{ width: "20%" }}>
          https://www.google.com/search?q={prediction.className} 
      </TableCell>
      <TableCell align="right" style={{ width: "20%" }}>
          https://www.flipkart.com/search?q={prediction.className}
       </TableCell>
    </TableRow>
  );
};
