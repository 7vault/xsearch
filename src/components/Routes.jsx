import React from "react";
import Results from "./Results";
import { useRoutes, useNavigate } from "react-router-dom";

export const Routes = () => {
  const navigate = useNavigate();
  const routes = useRoutes([
    {
      path: "/",
      action: () => navigate("/WebSearchAPI"),
    },
    {
      path: "/WebSearchAPI",
      element: <Results />,
    },
    {
      path: "/ImageSearchAPI",
      element: <Results />,
    },
    {
      path: "/NewsSearchAPI",
      element: <Results />,
    },
  ]);

  return <div className="p-4">{routes}</div>;
};
