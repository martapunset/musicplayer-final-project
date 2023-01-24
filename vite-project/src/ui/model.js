import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, auto);
height: 100vh;
`
export const ContainerLogin = styled.div`
width: 80%;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, auto);
${'' /* height: 100vh; */}
`

export const Header = styled.header`
grid-area: header;


${'' /* & > h1 {
    margin-left: 2%;
} */}
`

export const Main = styled.main`
grid-area: main;
overflow-y: scroll;
`

export const Sidebar = styled.aside`
grid-area: sidebar;
display: flex;
align-items: center;
justify-content: center;
`

export const Widget = styled.div`
height: 180px;
grid-area: ${props => props.className === "widget-1" ? "widget-1" : "widget-2"}; 
display: flex;
align-items: center;
justify-content: center;
`

export const Footer = styled.footer`
padding: 1%;
grid-area: footer;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const IconBack = styled.i`
width: 24px;
height: 24px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const FooterIcon = styled.div`
display: flex;
justify-content: space-between
`

export const H1 = styled.h1`
color: white
`

export const P = styled.p`
color: white
`