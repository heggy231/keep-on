import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "orange",
  };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/formMood">
        Form Mood
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/formSignUp">
        Form Sign Up
      </NavLink>
    </nav>
  );
};

export default Header;
