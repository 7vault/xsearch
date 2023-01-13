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
      {links_array.map(({ url, text }) => (
        <NavLink
          to={url}
          className="m-2 mb-0"
          activeClassName="text-blue-700 border-b-2 dark:text-white-200"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
