import React from 'react'
import { Link } from 'react-router-dom'
import { HomeBackgroundImg } from '../../components/HomeBackgroundImg'
import {   GlobalStyle } from '../../ui'
import { Header, Sidebar, Container, Widget, IconBack, Title, Textsmall, Spam, Column, Input, Button, Footer, Main } from '../../ui'
import { homeBackground } from 'homeBackground.png'

export const AuthHomePage = () => {
    return (
        <>
            <GlobalStyle />
         


            <Container className="contenedor" style={{ 
      backgroundImage: `url("homeBackground.jpeg") `
    }}>

            <Header className="header">

                
            </Header>

            <Main className="contenido">
               
            </Main>

           
            <Widget className="widget-1">
                    <Column>
                    <Link to="/login"><Button>login</Button></Link>
            <Link to="/register"><Button>register</Button></Link>
                
                </Column>
            </Widget>
            <Widget className="widget-2">
                
                
            </Widget>
            <Footer className="footer">
            <Column>
                    
                    
                </Column><Textsmall> Not a member ? <Spam >Register now</Spam></Textsmall></Footer> {/* LINK */}


            
        </Container>
        </>
    )
}