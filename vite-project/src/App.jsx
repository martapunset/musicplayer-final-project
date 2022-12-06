import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";
import { GlobalStyle } from "./ui/globalStyles";

function App() {


  return (
    <>
      
      <BrowserRouter>
        <Router/>
        <GlobalStyle />
      </BrowserRouter>
      
    </>
  );
}

export default App
