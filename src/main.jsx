import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./Context/Context.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
