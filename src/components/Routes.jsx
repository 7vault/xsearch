import React from "react";
import Results from "./Results";
import { Switch, Route, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route path={["/search", "/images", "news", "/videos"]}>
          <Results></Results>
        </Route>
      </Switch>
    </div>
  );
};
