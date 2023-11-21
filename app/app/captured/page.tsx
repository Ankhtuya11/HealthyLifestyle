
"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";

export default function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("data"))
  const [translated, setTranslated] = useState("");
  const txtData2 = searchParams.get("data") ?? "";

  useEffect(() => {
    const fetchData = async () => {

      const encodedParams = new URLSearchParams();
      encodedParams.set('from', 'auto');
      encodedParams.set('to', 'en');
      encodedParams.set('text', txtData2);

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
        setTranslated(response.data.trans)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function
  }, [searchParams]);

  return (
    <div>
      {translated}
    </div>
    
  );
}




// https://rapidapi.com/undergroundapi-undergroundapi-default/api/google-translate113


