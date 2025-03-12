import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartCtxProvider from "./contexts/CartCtx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartCtxProvider>
      <App />
    </CartCtxProvider>
  </StrictMode>,
);
