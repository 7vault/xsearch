import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResusltContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const [text, setText] = useState("Hillsong");
  return (
    <div>
      Search <Links />
    </div>
  );
};

export default Search;
