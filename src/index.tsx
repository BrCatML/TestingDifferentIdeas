import { StrictMode } from "react";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";

//@ts-ignore
// import * as ReactDOMClient from "../node_modules/react-dom/client.js"

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// const App = () => <h1>Привет, React Router</h1>;

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )