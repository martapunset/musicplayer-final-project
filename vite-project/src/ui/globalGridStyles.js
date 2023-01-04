import { createGlobalStyle } from "styled-components";

export const GlobalGridStyles = createGlobalStyle`

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
.container {
  
grid-template-areas: "header header header header"
                    "main main main main"
                    
                 
                    "footer footer footer footer"
                    "sidebar sidebar sidebar sidebar"
;
}


/*min 768px*/
@media screen and (min-width: 768px){
.container{
grid-template-areas:    "header header header header"
                        "main main main main"
                        
                   
                        "footer footer footer footer"
                        "sidebar sidebar sidebar sidebar"
;
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
    grid-template-areas:    "sidebar header header header"
                        "sidebar main main main"
                      
                     "sidebar main main main"
                        "footer footer footer footer"
  }
}

/*min 1536px*/

`;
