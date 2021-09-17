import React from "react";

const Header = () => {
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
