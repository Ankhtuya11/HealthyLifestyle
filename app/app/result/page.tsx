"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function page() {
    const searchParams = useSearchParams();
    const engTxt = searchParams.get("data") ?? "";
    const axios = require('axios');
    const [result, setResult] = useState("");
    const [translate, setTranslate] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const axios = require('axios');
  
        const options = {
          method: 'POST',
          url: 'https://open-ai21.p.rapidapi.com/conversationmpt',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '2fafd55848mshe2b9996f8085a32p1f512ajsnc4a107eefd2c',
            'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
          },
          data: {
            messages: [
              {
                role: 'user',
                content: engTxt+" give me pros and cons of this food",
              }
            ],
            web_access: false
          }
        };
  
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setResult(response.data.MPT)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [engTxt]);
    useEffect(() => {
      const fetchData = async () => {
        
        
        const encodedParams = new URLSearchParams();
        encodedParams.set('from', 'en');
        encodedParams.set('to', 'mn');
        encodedParams.set('text', result);
  
        const options = {
          method: 'POST',
          url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'c0a2d3b7a8mshe348abd873a4e4ep17385djsn44c42053c9a5',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
          },
          data: encodedParams,
        };
  
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setTranslate(response.data.trans)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData(); // Call the async function
    }, [result]);
  return (
    <div>page
 
        {translate}
    </div>
  )
}




// https://rapidapi.com/rphrp1985/api/open-ai21