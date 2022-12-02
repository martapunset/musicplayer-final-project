import { Column, Container, Footer, Header, IconBack, Main, Sidebar, Widget } from "../styles/model";
import facebook from '../assets/img/face.png'
import { Textsmall, Title } from "../styles/TextStyle";

export const Login = () => {

    return (
        <Container className="contenedor">

            <Header className="header">
                <IconBack>back</IconBack><img src={facebook} alt="icon" width="30" />
            </Header>

            <Main className="contenido">
                <Title> Sign In</Title>
                <Textsmall>If you need any support click here</Textsmall>
            </Main>

            <Sidebar className="sedebar">
                <input placeholder="Enter username or email" />
            </Sidebar>

            <Widget className="widget-1">
                <Column>
                    <input placeholder="Password" />
                    <Textsmall>Recovery password</Textsmall>
                </Column>
            </Widget>
            <Widget className="widget-2">
                <Column>
                    <button type="input">Sign In</button>
                    <Textsmall>or</Textsmall>
                    <div>
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                    </div>
                </Column>
            </Widget>

            <Footer className="footer"><Textsmall>Not a member ? register now</Textsmall></Footer>

        </Container>
    )
}
