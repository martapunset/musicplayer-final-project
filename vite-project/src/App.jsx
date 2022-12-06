import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";
import { GlobalStyle } from "./ui/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
