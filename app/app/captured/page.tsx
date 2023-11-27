"use client"
import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/public/assets/lottie/gradient_orb.json";

export default function Page() {
  const searchParams = useSearchParams();
  const txtData2 = searchParams.get("data") || "";
  const [translated, setTranslated] = useState("");
<<<<<<< HEAD
  const txtData2 = searchParams.get("data") ?? "";
  
  useEffect(() => {
    const fetchData = async () => {
      
      
      const encodedParams = new URLSearchParams();
      encodedParams.set('from', 'auto');
      encodedParams.set('to', 'en');
      encodedParams.set('text', txtData2);

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
    } 
  }, [txtData2]);

>>>>>>> e8970e1e8e255c937b6b08d19a4d5ce4ee525a53
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

          console.log(response.data.response);
          setResult(response.data.response);
          // Handle the response as needed
        } catch (error) {
        }finally {
          setLoading(false); // Set loading to false regardless of success or failure
        }
      };

      fetchGPT();
    }
  }, [translated]);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}
      {result && <p>{result}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
