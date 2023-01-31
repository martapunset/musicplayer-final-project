import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

<<<<<<< HEAD
import "@madzadev/audio-player";
=======
>>>>>>> 86ccb2106304126754a5ad57d1b1e8adff1bf67b
import { BrowserRouter } from "react-router-dom";
// console.log(window.location.origin);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Auth0Provider
      domain="bernersmusicapp.eu.auth0.com"
      clientId="qFfW5qSqtLX9AnlXSIM7RfJyCvKsemal"
      redirectUri={window.location.origin}
      audience="https://express.sample"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
  //</React.StrictMode>
);
