import React from 'react'
import { Button , Input } from '../../ui/Buttons.style'
import { GridRegisterLogin } from '../../ui/Gridstyle'
import { Img, Img2 } from '../../ui/Img'


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
