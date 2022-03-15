import { useState} from "react";
import useSnackBar from "./useSnackBar";

const useMobileNetModel = () => {
  const [data, setData]=useState([{}])
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  } = useSnackBar();

  const getObject=async ()=> {
    fetch("/prediction").then(
      res=>res.json()
    ).then(
        data=>{
          setData(data)
          console.log(data)
        }
    ).catch(error =>{
      setSnackBarMessage(
        "Oopsie!! No product found. Take another picture."
      )
      console.log(error)
    })
  }

  const makePrediction = async (imageURL) => {
    if (imageURL === null) {
      setSnackBarMessage("Oopsie....try taking another pic");
      setOpen(true);
      return;
    }
    setIsLoading(true);

    try {
      await getObject();
      setIsLoading(false);
      setPredictions([{"className":data.a}]);
      console.log("Predictions- ",predictions);
      setSnackBarMessage(
        "These are the possible options for your product, if u don't like them help me discover them..."
      );
    } catch (err) {
      setSnackBarMessage(
        "Oopsie!! No product found. Take another picture."
      );
      console.error("error:", err);
    }
    setOpen(true);
  };

  return {
    snackBarMessage,
    open,
    handleClose,
    predictions,
    setPredictions,
    isLoading,
    setIsLoading,
    makePrediction,
  };
};

export default useMobileNetModel;
