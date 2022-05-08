import { useState} from "react";
import useSnackBar from "./useSnackBar";

const useMobileNetModel = () => {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    handleClose,
    open,
    setOpen,
    snackBarMessage,
    setSnackBarMessage
  } = useSnackBar();

  const saveAndGetObject=async (image,setIsPrediction)=>{
    const [metadata,base64Image] = image.split(",");
    await fetch(
        "https://shopping-assistance-da2b8-default-rtdb.firebaseio.com/Image.json",
        {
            method: 'POST',
            body: JSON.stringify({"imageData":base64Image}),
            headers:{
                'Content-Type':'application/json'
            }
        }
      ).catch((err)=>{
        setSnackBarMessage("Not able to connect to the Database");
        console.log(err);
      });
      
      await fetch("/prediction").then(
        res=>res.json()
      ).then(
          fetchedData=>{

            console.log("fetchedData- ",fetchedData.object);
            setIsLoading(false);
            
            if(fetchedData.object===undefined || fetchedData.object==="No Object Detected!"){
              setSnackBarMessage(
                "Oopsie!! No product found.Please Take another picture."
              );
            }
            else{
            setPredictions([{"className":fetchedData.object}]);
            setIsPrediction(true);
            console.log("Predictions- ",predictions);
            setSnackBarMessage(
              "These are the possible options for your product."
            );
            }

          }
      ).catch(error =>{
        setSnackBarMessage(
          "Not able to connect with the backend server."
        )
        console.log(error)
      })
  }

  const makePrediction = async (imageURL,setIsPrediction) => {
    if (imageURL === null) {
      setSnackBarMessage("Oopsie....try taking another pic");
      setOpen(true);
      return;
    }
    setIsLoading(true);
    setIsPrediction(false);

    try {
      await saveAndGetObject(imageURL,setIsPrediction);
      
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
