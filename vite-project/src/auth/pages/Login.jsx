
import { Column, Container, Header, IconBack, Sidebar, Widget, Main, Spam } from '../../ui/model'
import { Textsmall, Title } from '../../ui/TextStyle'
import facebook from '../../assets/img/face.png'


export const Login = () => {

    return (
        <Container className="contenedor">

            <Header className="header">
                <IconBack>back</IconBack><img src={facebook} alt="icon" width="30" /> {/* LINK en back */}
            </Header>

            <Main className="contenido">
                <Title> Sign In</Title>
                <Textsmall>If you need any support <Spam green>Click here</Spam></Textsmall> {/* LINK */}
            </Main>

            <Sidebar className="sidebar">
                <input placeholder="Enter username or email" />
            </Sidebar>

            <Widget className="widget-1">
                <Column>
                    <input placeholder="Password" />
                     <Textsmall>Recovery password</Textsmall> {/* LINK */}
                </Column>
            </Widget>
            <Widget className="widget-2">
                <Column>
                    <button type="input">Sign In</button>
                    <Textsmall>or sign in with</Textsmall>
                    <div>
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                    </div>
                </Column>
            </Widget>

            <Footer className="footer"><Textsmall> Not a member ? <Spam href="1">Register now</Spam></Textsmall></Footer> {/* LINK */}

        </Container>
    )
}
