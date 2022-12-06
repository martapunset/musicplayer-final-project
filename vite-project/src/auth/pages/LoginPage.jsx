import icono from '../../assets/img/icono.png'
import facebook from '../../assets/img/face.png'
import { Header, Sidebar, Container, Widget, IconBack, Title, Textsmall, Spam, Column, Input, Button, Footer, Main } from '../../ui'


export const LoginPage = () => {

    return (
        <Container className="contenedor">

            <Header className="header">

                <IconBack>back</IconBack><img src={facebook} alt="icon" width="30" /> {/* LINK en back */}
            </Header>

            <Main className="contenido">
                <Title><img src={icono} width="30px"/></Title>
                <Title> Sign In</Title>
                <Textsmall>If you need any support <Spam green>Click here</Spam></Textsmall> {/* LINK */}
            </Main>

           
            <Widget className="widget-1">
                <Column>
                <Input placeholder="Enter username or email" />
                    <Input placeholder="Password" />
                     <Textsmall>Recovery password</Textsmall> {/* LINK */}
                </Column>
            </Widget>
            <Widget className="widget-2">
                <Column>
                    <Button type="input">Sign In</Button>
                    
                </Column>
            </Widget>
            <Footer className="footer">
            <Column>
                    
                    <Textsmall>or sign in with</Textsmall>
                    <div>
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                        <img src={facebook} alt="icon" width="30" />
                    </div>
                </Column><Textsmall> Not a member ? <Spam >Register now</Spam></Textsmall></Footer> {/* LINK */}


            
        </Container>
    )
}


