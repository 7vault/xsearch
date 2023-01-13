import React from "react";
import Results from "./Results";
import { useRoutes, useNavigate } from "react-router-dom";

export const Routes = () => {
  const navigate = useNavigate();
  const routes = useRoutes([
    {
      path: "/",
      action: () => navigate("/search"),
    },
    {
      path: "/search",
      element: <Results />,
    },
    {
      path: "/images",
      element: <Results />,
    },
    {
      path: "/news",
      element: <Results />,
    },
    {
      path: "/videos",
      element: <Results />,
    },
  ]);

  return <div className="p-4">{routes}</div>;
};
