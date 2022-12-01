import React from "react"
import { Button, Input } from "../../ui/Buttons.style";
import { GridRegisterLogin } from "../../ui/Gridstyle";


export const LoginPage = () => {
  return <>
    <div>loginPage</div>;
    <GridRegisterLogin>
      <form>
      
        <Input type="text" placeholder="Name"/>
        <Button>SingIn</Button>
      </form>
      </GridRegisterLogin>
    </>
};
