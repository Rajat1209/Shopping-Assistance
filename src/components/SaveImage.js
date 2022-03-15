const SaveImage=(props)=>{

    const save=()=>{
        // fetch(
        //     "https://shopping-assitance-default-rtdb.firebaseio.com/Image.json",
        //     {
        //         method: 'POST',
        //         body: JSON.stringify({"imageData":this.props.image}),
        //         headers:{
        //             'Content-Type':'application/json'
        //         }
        //     }
        //   ).then(()=>{
        //     console.log("ImageSaved");
        //   });
    }

    return (
        <>
        {save()}
        </>
    );

}
export default SaveImage;