"use client"
import React from "react";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import { Button } from "./ui/button";

import Lottie from "lottie-react";
import animationData from "@/public/assets/lottie/gradient_orb.json";
export default function CustomWebcam() {
  const [imgSrc, setImgSrc] = useState(null);
  const [txtData, setTxtData] = useState("");
  const webcamRef = useRef(null);
  
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    // Convert base64 image data to a Blob
    const blob = await fetch(imageSrc).then(res => res.blob());

    // Create a FormData object and append the Blob with a unique filename
    const formData = new FormData();
    formData.append("image", blob, "captured-photo.jpg");

    // Call the OCR API
    try {
      const response = await axios.post('https://ocr-extract-text.p.rapidapi.com/ocr', formData, {
        headers: {
          'X-RapidAPI-Key': '2fafd55848mshe2b9996f8085a32p1f512ajsnc4a107eefd2c',
          'X-RapidAPI-Host': 'ocr-extract-text.p.rapidapi.com',
        },
      });

      console.log(response.data.text);
      const txtData = response.data.text
      setTxtData(txtData)
    } catch (error) {
      console.error('Error sending image to OCR API:', error);
    }
  }, [webcamRef]);
  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className="container">
      <Webcam
        height={360}
        width={640}
        forceScreenshotSourceSize
        videoConstraints={{
          height: 720,
          width: 1280
        }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={0.8}
        className="rounded-lg"
      />
      <div className="btn-container">
        {imgSrc ? (
          <Button onClick={retake}>Retake photo</Button>
        ) : (
          <Button onClick={capture}>Capture photo</Button>
        )}
      </div>

      {txtData ? (
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center"
              loop={true}
            />
         
      ): (
        <p>as</p>
      )}

{txtData ? (
         <Link href={{
          pathname: "/captured",
          query:{
            data: txtData,
          },
         }}>go to captured</Link>
        ) : (
          <p>asda</p>
        )}
    </div>
  );
}
