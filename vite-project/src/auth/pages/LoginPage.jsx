import React from "react"
import { Button, Input } from "../../ui";
import { GridRegisterLogin } from "../../ui";


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
