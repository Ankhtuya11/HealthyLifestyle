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
  const [imgSrc, setImgSrc] = useState(null);
  const [txtData, setTxtData] = useState("");
  const webcamRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const capture = useCallback(async () => {
    if (webcamRef.current) {
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
            'X-RapidAPI-Key': '4a7f4ce95amsh54c1b82039f0a6fp145eeejsnb3000ad01125',
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
  }, [webcamRef]);

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
          width: 1280
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
          <Button onClick={capture} className="w-96">Capture photo</Button>
        )}
      </div>

      {txtData ? (
        <Link href={{
          pathname: "/captured",
          query: {
            data: txtData,
          },
        }}>
          <Button onClick={retake} className="w-96 mt-4">Check food</Button>
        </Link>
      ) : (
        <p></p>
      )}
    </div>
  );
}
