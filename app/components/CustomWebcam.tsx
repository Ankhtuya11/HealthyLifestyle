"use client"
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

export default function CustomWebcam() {
    const [mirrored, setMirrored] = useState(false);
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef]);
      const retake = () => {
        setImgSrc(null);
      };
  return (
    <div className="container">
    {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={600}
          width={600}
          ref={webcamRef}
          forceScreenshotSourceSize
          videoConstraints 
          mirrored={mirrored}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
    <div className="controls">
      <div>
        <input
          type="checkbox"
          checked={mirrored}
          onChange={(e) => setMirrored(e.target.checked)}
        />
        <label>Mirror</label>
      </div>
    </div>
    <div className="btn-container">
    {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
    </div>
  </div>
  )
}