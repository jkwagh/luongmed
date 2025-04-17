import { StrictMode } from "react";
import './scss/styles.scss'
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { AppProvider } from "./components/appContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

//wildmed, critical care, toxus

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);

