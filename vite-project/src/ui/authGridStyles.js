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
  background-color: #171A4A;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/*Grid Area First Mobile*/
/*min 640px*/
.containerLogin {
  background-image: url(${homeBackground});
  background-repeat: no-repeat; 
  background-size: cover;
  grid-template-areas: 
                    "header header header"
                    "main main main"
                    "widget-1 widget-1 widget-1"
                    "widget-2 widget-2 widget-2"
                    "footer footer footer";                 
}`