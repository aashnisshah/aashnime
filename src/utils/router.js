import React from "react";
import { Route } from "react-router-dom";
import { NavigationLinks } from "../utils/config";

const MyRouter = () => (
  <div>
    {NavigationLinks.map(({ link, component }, id) => {
      console.log("here router", { link }, { component });
      return <Route key={id} path={link} exact component={component} />;
    })}
  </div>
);

export { MyRouter };
