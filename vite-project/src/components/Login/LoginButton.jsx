import {useAuth0} from '@auth0/auth0-react'
import { ButtonShort } from '../../ui';
import React from 'react'
import { LogoProfile } from '../../ui';
import logoHarmony from "../../assets/img/logoHarmony.png"
import harmonyGuitar from "../../assets/img/harmonyGuitar.png"
export const LoginButton = () => {
    const { loginWithPopup } = useAuth0();
  return (
    <>
        <LogoProfile>
    <img src={logoHarmony} alt="Logo" width={'70px'}/>
  </LogoProfile>
      <ButtonShort onClick={()=>loginWithPopup()}>Start</ButtonShort>

    </>
  )
}

