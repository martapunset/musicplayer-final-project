import {useAuth0} from '@auth0/auth0-react'
import { ButtonShort } from '../../ui';
import React from 'react'

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <ButtonShort onClick={() =>loginWithRedirect()}>Login</ButtonShort >
  )
}

