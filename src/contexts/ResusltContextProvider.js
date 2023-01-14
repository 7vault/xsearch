import React, { create, createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '8cb5fa57bbmsh5e682bc5e489226p1b8e20jsn68af99a6a60e',
    //     'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
    //   }
    // };

    // fetch('https://google-search72.p.rapidapi.com/search?query=word%20cup&gl=us&lr=en&num=10&start=0&sort=relevance', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8cb5fa57bbmsh5e682bc5e489226p1b8e20jsn68af99a6a60e",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log(data.items);
    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.items);
    }
    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
