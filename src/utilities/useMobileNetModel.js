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
    await fetch("/prediction").then(
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

  const save=(image)=>{
    const [metadata,base64Image] = image.split(",");
    fetch(
        "https://shopping-assitance-default-rtdb.firebaseio.com/Image.json",
        {
            method: 'POST',
            body: JSON.stringify({"imageData":base64Image}),
            headers:{
                'Content-Type':'application/json'
            }
        }
      ).catch((err)=>{
        console.log(err);
      });
  }

  const makePrediction = async (imageURL,setIsPrediction) => {
    if (imageURL === null) {
      setSnackBarMessage("Oopsie....try taking another pic");
      setOpen(true);
      return;
    }
    
    save(imageURL);

    setIsLoading(true);
    setIsPrediction(false);

    try {
      await getObject();
      setIsLoading(false);
      setPredictions([{"className":data.object}]);
      setIsPrediction(true);
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
