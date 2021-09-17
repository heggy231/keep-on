import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "orange",
  };

  return (
    <nav>
      <a href="/">Home</a>
      {" | "}
      <a href="/formSignUp">Form Sign Up</a>
      {" | "}
      <a href="/formMood">Form Mood</a>
    </nav>
  );
};

export default Header;
