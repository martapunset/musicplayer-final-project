import styled from "styled-components";

export const Container = styled.div`
width: 90%;
max-width: 1000px;
margin:20px auto;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, auto);
`

export const Header = styled.header`
${'' /* background: blue; */}
color: #fff;
grid-area: header;

& > h1 {
    margin-left: 2%;
}
`

export const Main = styled.main`
padding-left: 2%;
grid-area: contenido;
`

export const Sidebar = styled.aside`
${'' /* background: orange; */}
min-height: 100px;
grid-area: sidebar;
/*flexbox para acomodar elementos*/
display: flex;
align-items: center;
justify-content: center;
`

export const Widget = styled.div`
${'' /* background: orchid; */}
height: 100px;
grid-area: ${props => props.className === "widget-1" ? "widget-1" : "widget-2"}; 
/*flexbox para acomodar elementos*/
display: flex;
align-items: center;
justify-content: center;
`

export const Footer = styled.footer`
padding: 20px;
${'' /* background: maroon; */}
color: #fff;
grid-area: footer;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const IconBack = styled.i`
${'' /* position: absolute; */}
width: 24px;
height: 24px;
${'' /* left: 51px;
top: 100px; */}
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`