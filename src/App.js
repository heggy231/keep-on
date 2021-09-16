import React from "react";
import Header from "./components/common/Header";
import FormMood from "./components/FormMood";
import FormSignUp from "./components/FormSignUp";

const App = () => {
  const getPage = () => {
    const route = window.location.pathname;
    if (route === "/formMood") return <FormMood />;
    if (route === "/formSignUp") return <FormSignUp />;
    return;
  };

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
