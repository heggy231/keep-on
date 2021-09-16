import React from "react";
import Header from "./common/Header";
import FormMood from "./FormMood";
import FormSignUp from "./FormSignUp";
import HomePage from "./HomePage";

const App = () => {
  const getPage = () => {
    const route = window.location.pathname;
    if (route === "/formMood") return <FormMood />;
    if (route === "/formSignUp") return <FormSignUp />;
    return <HomePage />;
  };

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
