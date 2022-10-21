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
