import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";
import { GlobalStyles } from "./utils";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <Analytics />
  </React.StrictMode>
);
