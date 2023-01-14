import React from "react";
import { NavLink } from "react-router-dom";

const links_array = [
  { url: "/search", text: " 🔍 All" },
  { url: "/news", text: " 🗞️ news" },
  { url: "/images", text: "📸 images" },
  { url: "/videos", text: " 🎥 videos" },
];
export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links_array.map(({ url, text }, i) => (
        <div
          key={i}
          className=" bg-gray-800 text-gray-200 rounded-full text-white-200 mt-5 hover:overline"
        >
          <NavLink to={url} className="m-2 mb-0">
            {text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
