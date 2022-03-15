import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
// import TextToSpeech from "./TextToSpeech";
import SaveImage from './SaveImage';

const Buttons = ({
  isLoading,
  isPhotoTaken,
  makePrediction,
  flipCamera,
  handleClick,
  image
}) => {
  //abstract buttons?
  return (
    <Grid container>
      <Grid item xs={isPhotoTaken ? 6 : 12}>
        <Grid>
          <Button onClick={handleClick} variant="contained" color="secondary">
            {isPhotoTaken ? "Retake" : "Take Photo"}
          </Button>
          {!isPhotoTaken && (
            <IconButton onClick={flipCamera}>
              <FlipCameraIosIcon />
            </IconButton>
          )}
        </Grid>
        <Grid>
          {isPhotoTaken && (
            <Button
              onClick={makePrediction}
              variant="contained"
              color="primary"
            >
              {isLoading ? "Loading..." : "Predict"}
            </Button>
          )}
        </Grid>
        {/* <TextToSpeech /> */}
      </Grid>
      {isPhotoTaken && (
        <Grid item xs={6}>
          <SaveImage image={image}/>
        </Grid>
      )}
    </Grid>
  );
};

export default Buttons;
