import React from "react";
import { twMerge } from "tailwind-merge";
import cx from "classnames";
import  {useState} from 'react';

const Upload = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [renderImage,setrenderImage]=useState(false);
  const handleSubmit=(e)=>{
    console.log(e.target.innerHTML)
    console.log(fileUrl)
    // setrenderImage(true)
  }
  const processImage=(event)=>{
    const imageFile = event.target.files[0];
   const imageUrl = URL.createObjectURL(imageFile)
   setFileUrl(imageUrl)
  }
  return (
    <div className="w-full flex flex-col justify-center relative">
      <img
        className="w-full bg-cover bg-center"
        alt="doctors"
        src="https://images.unsplash.com/photo-1605160535954-455ad7a89679?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwbWFza3xlbnwwfHwwfA%3D%3D&w=1000&q=80"
      />
      
      <input type="file" accept="image/*" onChange={processImage}></input>
      <button  onClick={handleSubmit} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] text-[24px] font-bold bg-[#14abbf] h-[80px] w-[20%] rounded-lg p-[20px]">
        Upload Image
      </button>
     
      {renderImage?<img src={fileUrl}/>:``}
    </div>
  );
};

export default Upload;
