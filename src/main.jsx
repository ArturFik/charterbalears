import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "./i18n/I18nProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <I18nProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nProvider>
);
