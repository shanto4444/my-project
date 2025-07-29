import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContexApi } from "./components/ContexApi.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import Store from "./Store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <ContexApi>
        <App />
      </ContexApi>
    </Provider>
  </StrictMode>
);
