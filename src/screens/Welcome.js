import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome to this app</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </>
  );
};

export default Welcome;
