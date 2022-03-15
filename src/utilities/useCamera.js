import { useState } from "react";

const userVideo = {
  width: 240,
  height: 240,
  facingMode: "user"
};

const facingOutVideo = {
  width: 240,
  height: 240,
  facingMode: { exact: "environment" }
};

const useCamera = () => {
  // camera orientation
  const [isFacingUser, setIsFacingUser] = useState(true);
  const [isMirrored, setIsMirrored] = useState(true);
  const [videoConstraints, setVideoConstraints] = useState(userVideo);
  // taking photo and setting image
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  const flipCamera = () => {
    setVideoConstraints(isFacingUser ? facingOutVideo : userVideo);
    setIsMirrored(!isMirrored);
    setIsFacingUser(!isFacingUser);
  };

  const takePhoto = webcamRef => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageURL(imageSrc);
    createImage(imageSrc);
    save(imageSrc);
  };

  const createImage = url => {
    const newImage = new Image();
    newImage.src = url;
    newImage.crossOrigin = "anonymous";
    setImage(newImage);
  };

  const save=(image)=>{
    const [metadata,base64Image] = image.split(",");
    console.log("Base64 ",base64Image);
    fetch(
        "https://shopping-assitance-default-rtdb.firebaseio.com/Image.json",
        {
            method: 'POST',
            body: JSON.stringify({"imageData":base64Image}),
            headers:{
                'Content-Type':'application/json'
            }
        }
      ).then(()=>{
        console.log("ImageSaved");
      });
  }

  return {
    flipCamera,
    isMirrored,
    videoConstraints,
    imageURL,
    setImageURL,
    image,
    takePhoto,
    isPhotoTaken,
    setIsPhotoTaken
  };
};

export default useCamera;
