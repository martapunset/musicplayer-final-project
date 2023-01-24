//demsa pantallas

import { createGlobalStyle } from "styled-components";
import homeBackground from "../assets/img/homeBackground.jpeg";
export const GlobalGridStyles = createGlobalStyle`

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

/*Grid Area First Mobile*/
/*min 640px*/

.containerLogin {
  background-image: url(${homeBackground});
  background-repeat: no-repeat; 
  background-size: cover;
  grid-template-areas: 
                    "header header header"
                    "main main main"
                    "main main main"
                    "footer footer footer";                 
}
  
${'' /* .container {
grid-template-areas: "header sidebar sidebar sidebar"
                    "main main main main"
                    "main main main main"
                    "footer footer footer footer"
} */}

/*min 768px*/
@media screen and (min-width: 768px){
.container{
grid-template-areas:    "header sidebar sidebar sidebar"
                        "main main main main"
                        "main main main main"
                        "footer footer footer footer"
}    
}

/*min 1024px*/
@media screen and (min-width: 1024px){
.container{
grid-template-areas:    "sidebar header header header"
                        "sidebar main main main"
                        "sidebar main main main"
                        "footer footer footer footer"
}
}

/*min 1280px*/
@media screen and (min-width: 1280px){
  .container{
    grid-template-areas:    
                        "sidebar header header header"
                        "sidebar main main main"
                        "sidebar main main main"
                        "footer footer footer footer"
  }
}

/*min 1536px*/
`;
