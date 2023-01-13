import React, { create, createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8cb5fa57bbmsh5e682bc5e489226p1b8e20jsn68af99a6a60e",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });

    const data = await response.json();
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
