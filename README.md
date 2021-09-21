# Create React App that routes to home, signup form, mood form pages.

- not use react-router-dom but just anchor tags and helper function `getPage`.

```jsx
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
```

## How to add Bootstrap in React

1. index.html (add inside of head of html file)

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

2. > npm install react-bootstrap bootstrap

## cool shorthand writings:

> import { render } from 'react-dom';
> same as:
> import ReactDOM from 'react-dom';
> const render = ReactDOM.render;

## FAQ:

- What does render do?
  - `React.js` uses virtual DOM, the Render function updates any changes to the virtual DOM. ReactDOM.render() renders the changes to the nodes in the virtual DOM.
    > `ReactDOM.render(<App />, document.getElementById("root"));`
    - Ref: https://discuss.codecademy.com/t/i-have-a-question-about-reactdom-render/504205/3
