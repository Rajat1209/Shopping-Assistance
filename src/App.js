import React from "react";
import "./App.css";
import { Container, CircularProgress, Grid, Snackbar } from "@material-ui/core";
import Navbar from "./components/Navbar";
import PredictionsTable from "./components/PredictionsTable";
import DeviceWebcam from "./components/DeviceWebcam";
import useMobileNetModel from "./utilities/useMobileNetModel";

const App = () => {
  const {
    snackBarMessage,
    open,
    handleClose,
    predictions,
    setPredictions,
    isLoading,
    setIsLoading,
    makePrediction
  } = useMobileNetModel();


  return (
    <Grid>
        <Grid className="App">
          <Container>
            <Navbar />
            <DeviceWebcam
              setPredictions={setPredictions}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              makePrediction={makePrediction}
            />

            {isLoading && (
              <Grid component="span">
                <CircularProgress />
              </Grid>
            )}
            {predictions && <PredictionsTable predictions={predictions} />}
          </Container>
        </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackBarMessage}
      />
    </Grid>
  );
};

export default App;
