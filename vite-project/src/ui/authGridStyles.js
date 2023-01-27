//pagina inicio
import { createGlobalStyle } from "styled-components";
import homeBackground from "../assets/img/homeBackground.jpeg";
export const AuthGridStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(23,26,74);
  background: linear-gradient(0deg, rgba(23,26,74,1) 10%, rgba(2,10,28,1) 89%);

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.containerLogin {
  background-image: url(${homeBackground});
  background-repeat: no-repeat; 
  background-size: cover;
  grid-template-areas: 
                    "main";                 
  width: 100%;
  height: 100vh;
  align-icons: center;
  justify-content: center;
  padding-top: 15%;
}`