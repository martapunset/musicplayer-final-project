import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Auth0Provider
      domain="bernersmusicapp.eu.auth0.com"
      clientId="qFfW5qSqtLX9AnlXSIM7RfJyCvKsemal"
      redirectUri={window.location.origin}
      audience="https://express.sample"
    >
      <Toaster />
      <App />
    </Auth0Provider>
  </BrowserRouter>
  //</React.StrictMode>
);
