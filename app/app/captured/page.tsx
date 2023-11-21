
"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";

export default function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("data"))
  const [txtData2, setTxtData2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const dataFromSearchParams = searchParams.get("data");
      setTxtData2(dataFromSearchParams || "");

      const encodedParams = new URLSearchParams();
      encodedParams.set('from', 'auto');
      encodedParams.set('to', 'en');
      encodedParams.set('text', '"Манай төвөөр өдөрт 90-100 жолооч үйлчлүүлж байгаагаас 30 орчим нь л RFID наалгаж байна" ; Нийгэм · 12+. 24 ; Эрүүл мэнд · 218. 19 ; Хүмүүс · 19+. 26 ; Бизнес · 121.');

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
        console.log(response.data.trans);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function
  }, [searchParams]);

  return (
    <div>page</div>
    
  );
}




// https://rapidapi.com/undergroundapi-undergroundapi-default/api/google-translate113


