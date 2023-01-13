import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading.jsx";

import { useResultContext } from "../contexts/ResusltContextProvider";
const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); // images or news or videos

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title, description }, i) => (
            <div key={i} className="md:w2/5 w-full">
              <a href={link} target="_blank" rel="noreffer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                  {title}
                </p>
                <p className="text-sm hover:text-white-500 dark:text-white-200 text-dark-200"></p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, i) => (
              <a
                className="sm:p-3 p-5"
                href={href}
                target="_blank"
                rel="noreffer"
                key={i}
              >
                <img src={image?.src} alt={title} loading="lazy"></img>
                <p className="w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.entries?.map(({ links, title, id, source }) => (
            <div key={id} className="md:w2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreffer"
                className="hover:underline"
              >
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                  {title}
                </p>
                <div className="flex gap-4">
                  <a
                    className=""
                    href={source?.href}
                    target="_blank"
                    rel="noreffer"
                  >
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    case "/search":
      return "SEARCH";

    default:
      break;
  }
};

export default Results;
