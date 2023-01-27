import { createGlobalStyle } from "styled-components";
export const GlobalGridStyles = createGlobalStyle`

body {
  margin: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: rgb(23,26,74);
  // background: linear-gradient(0deg, rgba(23,26,74,1) 10%, rgba(2,10,28,1) 89%);
  ${'' /* background-color: #E8EAEE; */}
  ${'' /* background-color: #121212; */}
  background: rgb(18,18,18);
background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(37,36,36,1) 100%);

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/*min 640px*/
  
.container {
grid-template-areas: "header header header header header"
                    "main main main main main"
                    "footer footer footer footer footer"
                    "sidebar sidebar sidebar sidebar sidebar"
}

/*min 768px*/
@media screen and (min-width: 768px){
.container{
grid-template-areas:    "header header header header header"
                        "main main main main main"
                        "footer footer footer footer footer"
                        "sidebar sidebar sidebar sidebar sidebar"
}    
}

/*min 1024px*/
@media screen and (min-width: 1024px){
.container{
grid-template-areas:    "sidebar header header header header"
                        "sidebar main main main main"
                        "sidebar main main main main"
                        "footer footer footer footer footer"
}
}

/*min 1280px*/
@media screen and (min-width: 1280px){
  .container{
    grid-template-areas:    
                        "sidebar header header header header"
                        "sidebar main main main main"
                        "sidebar main main main main"
                        "footer footer footer footer footer"
  }
}

/*min 1536px*/
@media only screen and (min-width: 1536px){
  .container{
    grid-template-areas:    
                        "sidebar header header header header"
                        "sidebar main main main main"
                        "sidebar main main main main"
                        "footer footer footer footer footer"
  }
}

@media only screen and (min-width: 1024px){
  .logoResp{
    display: none;
  }
}
@media only screen and (min-width: 850px) and (max-width: 1024px) {
	.logoResp{
    margin-right: 700px;
  }
}
`;
