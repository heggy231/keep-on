# Create React App that routes to home, signup form, mood form pages.

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
  - Render function renders our App.
    > `ReactDOM.render(<App />, document.getElementById("root"));`
