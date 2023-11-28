"use client"


import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "@/public/assets/lottie/gradient_orb.json";
import { SelectScrollable } from "../selectScrollAble";
import { TextareaWithText } from "@/components/TextAreaWithText";

export default function Page() {
  const searchParams = useSearchParams();
  const txtData2 = searchParams.get("data") || "";
  const [translated, setTranslated] = useState("");
  const [result, setResult] = useState("");
  const [secondTranslated, setSecondTranslated] = useState(""); // New state for second translation
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTranslation = useCallback(async () => {
    try {
      setError(null);

      const response = await axios.post('https://google-translate113.p.rapidapi.com/api/v1/translator/text', {
        from: 'auto',
        to: 'en',
        text: txtData2,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'c0a2d3b7a8mshe348abd873a4e4ep17385djsn44c42053c9a5',
          'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com',
        },
      });

      setTranslated(prevState => response.data.trans);
    } catch (error) {
      // Handle translation error
    }
  }, [txtData2]);

  const fetchSecondTranslation = useCallback(async () => {
    try {
      setError(null);

      const response = await axios.post('https://google-translate113.p.rapidapi.com/api/v1/translator/text', {
        from: 'en', // Translate from English
        to: 'mn', // Translate to Mongolian (replace with your desired language code)
        text: result, // Translate the result from the first translation
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'c0a2d3b7a8mshe348abd873a4e4ep17385djsn44c42053c9a5',
          'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com',
        },
      });

      setSecondTranslated(prevState => response.data.trans);
    } catch (error) {
      // Handle second translation error
    }
  }, [result]);

  useEffect(() => {
    if (txtData2) {
      fetchTranslation();
    }
  }, [txtData2, fetchTranslation]);

  useEffect(() => {
    if (translated) {
      const fetchGPT = async () => {
        try {
          const response = await axios.post('https://chatgpt-openai1.p.rapidapi.com/ask', {
            query: `${translated} give me only pros and cons of this food`,
          }, {
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': '2fafd55848mshe2b9996f8085a32p1f512ajsnc4a107eefd2c',
              'X-RapidAPI-Host': 'chatgpt-openai1.p.rapidapi.com',
            },
          });

          setResult(response.data.response);
        } catch (error) {
          // Handle GPT error
        } finally {
          setLoading(false);
        }
      };

      fetchGPT();
    }
  }, [translated]);

  useEffect(() => {
    if (result) {
      // Trigger second translation when the result is available
      fetchSecondTranslation();
    }
  }, [result, fetchSecondTranslation]);

  return (
    <div className="p-10">
      <SelectScrollable />
      <div className="mb-5"></div>
      {loading && (
        <div className="flex justify-center items-center">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}

      {secondTranslated && <TextareaWithText secondTranslated={secondTranslated} />}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
