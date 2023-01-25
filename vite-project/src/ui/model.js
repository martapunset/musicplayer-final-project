import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: grid;
${'' /* grid-gap: 20px; */}
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(4, auto);
height: 100vh;
`
export const ContainerLogin = styled.div`
width: 80%;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, auto);
`

export const Header = styled.header`
grid-area: header;
& > h1 {
    margin-left: 2%;
}
`

export const Main = styled.main`
grid-area: main;
overflow-x: hidden;
    overfloy-y: scroll;
`

export const Sidebar = styled.aside`
width: 100%;
height: 100%;
grid-area: sidebar;
display: flex;
${'' /* align-items: center;
justify-content: center; */}
`

export const Widget = styled.div`
height: 180px;
grid-area: ${props => props.className === "widget-1" ? "widget-1" : "widget-2"}; 
display: flex;
align-items: center;
justify-content: center;
`

export const Footer = styled.footer`
grid-area: footer;
bottom: 0;
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

export const InputProfile = styled.input`
margin: 10px;
box-sizing: border-box;
width: 334px;
height: 80px;
padding: 10px;
background-color: white;
border: 1px solid white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
`

export const UserProfile = styled.div`
width: 140.05px;
height: 178px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: white;
`

export const UserImg = styled.img`
width: 111.11px;
height: 111.14px;
border-radius: 54px;
`

export const BtnEdit = styled.button`
box-sizing: border-box;
width: 94.87px;
height: 28.01px;
margin-top:10px;
background: #64C27B;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40.6599px
`

export const LogoProfile = styled.div`
padding: 20px;
`


export const FlexSpace = styled.div`
display: flex;
justify-content: space-between;
`
