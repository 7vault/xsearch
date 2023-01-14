import React, { create, createContext, useContext, useState } from "react";

const ResultContext = createContext();
const base_Url = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8cb5fa57bbmsh5e682bc5e489226p1b8e20jsn68af99a6a60e",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    fetch(`${base_Url}${type}`, options)
      .then((response) => response.json())
      .then((response) => setResults(response.value))
      .catch((err) => console.error(err));

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
