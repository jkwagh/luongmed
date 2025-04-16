import { StrictMode } from "react";
import './scss/styles.scss'
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

//wildmed, critical care, toxus

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

