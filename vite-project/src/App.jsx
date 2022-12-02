import { Login } from "./components/Login";
import Router from "./router/Router";
import { GlobalStyle } from "./styles/globalStyles";

function App() {


  return (
    <>
    <Router/>
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App
