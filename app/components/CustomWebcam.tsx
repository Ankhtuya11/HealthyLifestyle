"use client"
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';

export default function CustomWebcam() {
  const [imgSrc, setImgSrc] = useState(null);
  const [txtData, setTxtData] = useState("");
  const webcamRef = useRef(null);

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
          'X-RapidAPI-Key': 'c0a2d3b7a8mshe348abd873a4e4ep17385djsn44c42053c9a5',
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
        height={600}
        width={600}
        forceScreenshotSourceSize
        videoConstraints={{
          height: 720,
          width: 1280
        }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={0.8}
      />
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>

      {/* {txtData ? (
        <p>{txtData}</p>
      ) : (
        <p>No image captured</p>
      )} */}

 

{imgSrc ? (
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
