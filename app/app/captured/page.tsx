"use client"


import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "@/public/assets/lottie/gradient_orb.json";
import { TextareaWithText } from "@/components/TextAreaWithText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  const searchParams = useSearchParams();
  const txtData2 = searchParams.get("data") || "";
  const [translated, setTranslated] = useState("");
  const [result, setResult] = useState("");
  const [secondTranslated, setSecondTranslated] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("mn"); // Default language is Mongolian

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
          'X-RapidAPI-Key': '45c296c2f9mshc202be2d5d21948p154b68jsnd4a9c827de1f',
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
        from: 'en',
        to: selectedLanguage, // Use the selected language
        text: result,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '45c296c2f9mshc202be2d5d21948p154b68jsnd4a9c827de1f',
          'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com',
        },
      });

      setSecondTranslated(prevState => response.data.trans);
      console.log(response.data.trans)
    } catch (error) {
      // Handle second translation error
    }
    finally {
      setLoading(false);
    }
  }, [result, selectedLanguage]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };

  useEffect(() => {
    if (txtData2) {
      fetchTranslation();
    }
  }, [txtData2, fetchTranslation]);

  useEffect(() => {
    const fetchData = async () => {
        if (translated) {
            const options = {
                method: 'POST',
                url: 'https://chatgpt-42.p.rapidapi.com/geminipro',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'c0a2d3b7a8mshe348abd873a4e4ep17385djsn44c42053c9a5',
                    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
                },
                data: {
                    messages: [
                        {
                            role: 'user',
                            content: `${translated} give me only pros and cons of this food`
                        }
                    ],
                    web_access: false
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data.result);
                setResult(response.data.result)
            } catch (error) {
                console.error(error);
            }
        }
    };

    fetchData();
}, [translated]);


  

  useEffect(() => {
    if (result) {
      fetchSecondTranslation();
    }
  }, [result, fetchSecondTranslation, selectedLanguage]);

  return (
    <div className="p-10">
      <label className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Select Language</label>
<select id="countries" onChange={handleLanguageChange}
        value={selectedLanguage} className="border-4 border-indigo-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected value="mn">Mongolian</option>
  <option value="AF">Afrikaans</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
  <option value="BG">Bulgarian</option>
  <option value="CA">Catalan</option>
  <option value="KM">Cambodian</option>
  <option value="ZH">Chinese (Mandarin)</option>
  <option value="HR">Croatian</option>
  <option value="CS">Czech</option>
  <option value="DA">Danish</option>
  <option value="NL">Dutch</option>
  <option value="EN">English</option>
  <option value="ET">Estonian</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finnish</option>
  <option value="FR">French</option>
  <option value="KA">Georgian</option>
  <option value="DE">German</option>
  <option value="EL">Greek</option>
  <option value="GU">Gujarati</option>
  <option value="HE">Hebrew</option>
  <option value="HI">Hindi</option>
  <option value="HU">Hungarian</option>
  <option value="IS">Icelandic</option>
  <option value="ID">Indonesian</option>
  <option value="GA">Irish</option>
  <option value="IT">Italian</option>
  <option value="JA">Japanese</option>
  <option value="JW">Javanese</option>
  <option value="KO">Korean</option>
  <option value="LA">Latin</option>
  <option value="LV">Latvian</option>
  <option value="LT">Lithuanian</option>
  <option value="MK">Macedonian</option>
  <option value="MS">Malay</option>
  <option value="ML">Malayalam</option>
  <option value="MT">Maltese</option>
  <option value="MI">Maori</option>
  <option value="MR">Marathi</option>
  <option value="MN">Mongolian</option>
  <option value="NE">Nepali</option>
  <option value="NO">Norwegian</option>
  <option value="FA">Persian</option>
  <option value="PL">Polish</option>
  <option value="PT">Portuguese</option>
  <option value="PA">Punjabi</option>
  <option value="QU">Quechua</option>
  <option value="RO">Romanian</option>
  <option value="RU">Russian</option>
  <option value="SM">Samoan</option>
  <option value="SR">Serbian</option>
  <option value="SK">Slovak</option>
  <option value="SL">Slovenian</option>
  <option value="ES">Spanish</option>
  <option value="SW">Swahili</option>
  <option value="SV">Swedish </option>
  <option value="TA">Tamil</option>
  <option value="TT">Tatar</option>
  <option value="TE">Telugu</option>
  <option value="TH">Thai</option>
  <option value="BO">Tibetan</option>
  <option value="TO">Tonga</option>
  <option value="TR">Turkish</option>
  <option value="UK">Ukrainian</option>
  <option value="UR">Urdu</option>
  <option value="UZ">Uzbek</option>
  <option value="VI">Vietnamese</option>
  <option value="CY">Welsh</option>
  <option value="XH">Xhosa</option>
</select>
      <div className="mb-5"></div>
      {loading && (
        <div className="flex justify-center items-center">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}

      {secondTranslated && <TextareaWithText secondTranslated={secondTranslated} />}
      <Link href={{pathname: "/"}}> <Button>Go Back</Button></Link>
      
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}




// https://rapidapi.com/undergroundapi-undergroundapi-default/api/google-translate113

// https://rapidapi.com/CyberPulse/api/chatgpt-openai1


// https://rapidapi.com/rphrp1985/api/chatgpt-42 bard