import React from 'react'
import { Button , Input, GridRegisterLogin, Img, Img2 } from '../../ui'


export const AuthHomePage = () => {
    return (
        <>
            <GridRegisterLogin>
          <Img></Img>
          <Input />
            <Button>login</Button>
            <Button>register</Button>
            <Img2></Img2>
            </GridRegisterLogin>
        </>
    )
}
