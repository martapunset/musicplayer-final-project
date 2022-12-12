import facebook from '../../assets/img/face.png'
import { Link } from 'react-router-dom'
import { Input, Textsmall, Title, Container, Sidebar, Header, Button, Widget, Column, IconBack } from '../../ui'
import { ResponsiveStyles } from '../../ui/homegrid/responsiveStyles'
import { MdArrowBackIos } from "react-icons/md";

export const AuthRecoveryPage = () => {

  return (
    <>
      <ResponsiveStyles />
      <Container className='contenedor'>

        <Header className="header">
          <Link to="/"><IconBack><MdArrowBackIos /></IconBack></Link>
          <center><img src={facebook} alt="icon" width="30" /></center>
          <Title>Reset your password</Title>
        </Header>

        <Sidebar className="aside">
          <Textsmall>Introduce your Spotify username or your email address. We send you an email with your username and a link to recover your password.</Textsmall>
        </Sidebar>

        <Widget className="widget-1">
          <Column>
            <Input placeholder="Enter username or email" />
            <Button type="input">Send</Button>
            <Textsmall>If you still need help, don´t contact Spotify Support</Textsmall>
          </Column>
        </Widget>

      </Container>
    </>
  )
}
