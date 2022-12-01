import React from 'react'
import { Button } from '../ui/Buttons.style'
import { GridRegisterLogin } from '../ui/Gridstyle'
import { Img, Img2 } from '../ui/Img'

export const Home = () => {
    return (
        <>
            <GridRegisterLogin>
            <Img></Img>
            <Button>login</Button>
            <Button>register</Button>
            <Img2></Img2>
            </GridRegisterLogin>
        </>
    )
}
