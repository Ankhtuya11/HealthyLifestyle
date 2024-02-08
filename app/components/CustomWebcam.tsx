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

// ... (imports)

export default function CustomWebcam() {
  const [cameraFacingMode, setCameraFacingMode] = useState('user');
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [txtData, setTxtData] = useState("");
  const webcamRef = useRef<Webcam | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const capture = useCallback(async () => {
    if (webcamRef.current !== null && typeof webcamRef.current !== 'undefined') {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
  
      if (imageSrc) { // Check if imageSrc is not null
        // Convert base64 image data to a Blob
        const blob = await fetch(imageSrc).then(res => res.blob());
  
        // Create a FormData object and append the Blob with a unique filename
        const formData = new FormData();
        formData.append("image", blob, "captured-photo.jpg");
  
        // Call the OCR API
        try {
          const response = await axios.post('https://ocr-extract-text.p.rapidapi.com/ocr', formData, {
            headers: {
              'X-RapidAPI-Key': '45c296c2f9mshc202be2d5d21948p154b68jsnd4a9c827de1f',
              'X-RapidAPI-Host': 'ocr-extract-text.p.rapidapi.com',
            },
          });
  
          console.log(response.data.text);
          const txtData = response.data.text;
          setTxtData(txtData);
        } catch (error) {
          console.error('Error sending image to OCR API:', error);
        }
      }
    }
  }, [webcamRef]);
  
  const toggleCameraFacingMode = () => {
    setCameraFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
  };

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className="container flex flex-col items-center justify-center mt-8">
      <Webcam
        height={360}
        width={640}
        forceScreenshotSourceSize
        videoConstraints={{
          height: 720,
          width: 1280,
          facingMode: cameraFacingMode
        }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={0.8}
        className="rounded-lg mb-4"
      />
      <div className="btn-container">
        {imgSrc ? (
          <Button onClick={retake} className="w-96">Retake photo</Button>
        ) : (
          <>
          <Button onClick={toggleCameraFacingMode} className="w-96">Switch Camera</Button> <br/>
          <Button onClick={capture} className="w-96 mt-4">Capture photo</Button>
          </>
        )}
      </div>

      {txtData ? (
        <Link href={{
          pathname: "/captured",
          query: {
            data: txtData,
          },
        }}>
          <Button className="w-96 mt-4">Check food</Button>
        </Link>
      ) : (
        <p></p>
      )}
    </div>
  );
}


// https://rapidapi.com/iq.faceok/api/ocr-extract-text

//  key: f1f842cab2msh0946c87ea15c3a2p17ebe0jsn645c7b089abc
// 2fafd55848mshe2b9996f8085a32p1f512ajsnc4a107eefd2c