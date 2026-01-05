import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router.tsx";
import "./index.css";
import { Provider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <StrictMode>
      <Router />
    </StrictMode>
  </Provider>
);
