import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./Loading.jsx";

import { useResultContext } from "../contexts/ResusltContextProvider";
const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); // images or news or videos

  useEffect(() => {
    if (searchTerm) {
      console.log(typeof results);
      if (location.pathname === "/NewsSearchAPI") {
        getResults(
          `/search${location.pathname}?q=${searchTerm}&pageNumber=1&pageSize=40&autoCorrect=true`
        );
      } else {
        getResults(
          `/Search${location.pathname}?q=${searchTerm}&pageNumber=1&pageSize=40&autoCorrect=true`
        );
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/WebSearchAPI":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ id, url, title, body }) => (
            <div key={id} className="md:w2/5 w-full">
              <a href={url} target="_blank" rel="noreffer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                  {title}
                </p>
                <p className="text-sm hover:text-white-500 dark:text-white-200 text-dark-200">
                  {body}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/ImageSearchAPI":
      return (
        <div className="grid grid-cols-4 h-28 justify-center items-center">
          {results?.map(({ url, title, webpageUrl }, i) => (
            <a
              className="sm:p-3 p-5"
              href={webpageUrl}
              target="_blank"
              rel="noreffer"
              key={i}
            >
              <img src={url} alt={title} loading="lazy"></img>
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/NewsSearchAPI":
      return (
        <div className=" grid grid-cols-4 sm:grid-col-1 md:grid-cols-3 gap-5   sm:px-56 ">
          {results?.map(({ url, title, id, description, image }) => (
            <div key={id} className="w-full border-1 rounded shadow-lg">
              <a href={url} target="_blank" rel="noreffer">
                <img src={image.url} alt={title} loading="lazy"></img>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                  {title}
                </p>
                <div className="flex gap-4">{description}</div>
              </a>
            </div>
          ))}
        </div>
      );

    default:
      break;
  }
};

export default Results;
