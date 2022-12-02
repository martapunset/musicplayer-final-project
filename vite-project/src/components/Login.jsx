import { Column, Container, Footer, Header, Main, Sidebar, Widget } from "../styles/model";
import facebook from '../assets/img/face.png'

export const Login = () => {

    return (
        <Container className="contenedor">

            <Header className="header">
                <button>back</button><img src={facebook} alt="icon" width="30" />
            </Header>

            <Main className="contenido">
                <h1> Sign In</h1>
                <h2>If you need any support click here</h2>
            </Main>

            <Sidebar className="sedebar">
                <input placeholder="Enter username or email" />
            </Sidebar>

            <Widget className="widget-1">
                <Column>
                    <input placeholder="Password" />
                    <p>Recovery password</p>
                </Column>
            </Widget>
            <Widget className="widget-2">
                <Column>
                    <button type="input">Sign In</button>
                    <p>or</p>
                    <div>
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                    </div>
                </Column>
            </Widget>

            <Footer className="footer">Not a member ? register now</Footer>

        </Container>
    )
}
