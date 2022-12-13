import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../assets/img/face.png";
import { postUsers, getUsers } from "../api/postUsers";

import { Form, InputSmall, Button, Container, Header, Widget, Textsmall, IconBack, Column, Footer } from "../ui";
import { ResponsiveStyles } from "../ui/homegrid/ResponsiveStyles";
// import {
//   Header,
//   Sidebar,
//   Container,
//   Widget,
//   IconBack,
//   Title,
//   Textsmall,
//   Spam,
//   Column,
//   Input,
//   Button,
//   Footer,
//   Main,
//   InputSmall,
//   Form
// } from "../../ui";

export const RegisterForm = () => {

  const { register, handleSubmit } = useForm();

  const postUser = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/user",

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)

        })
      const created = await response.json();
      console.log('succesful addition: ', created)

    }


    catch (error) {
      console.log(error)
    }
  }
  const onSubmit = (data) => {

    console.log(data)
    postUser({ ...data, id: Date.now() })

  }
  return (
    <>

      <ResponsiveStyles />
      <Container className="contenedor">
        <Header className="header">
          <Link to="/">
            <IconBack>
              <MdArrowBackIos />
            </IconBack>
          </Link>
          <center>
            <img src={facebook} alt="icon" width="30" />
          </center>
        </Header>
        <Widget className="widget-1">
          <Column>
            <h1>Register</h1>
            <p>If you need any support <Link to="/support">Click here</Link></p>
            <Form action="" onSubmit={handleSubmit(onSubmit)}>
              <Column>
                <InputSmall type="text" name="name" id="" placeholder='Name' {...register("name")} />
                <InputSmall type="text" name="last_name" id="" placeholder='Last Name' {...register("last_name")} />
                <InputSmall type="email" name="email" id="" placeholder='Email' {...register("email")} />
                <InputSmall type="text" name="address" id="" placeholder='Adress' {...register("address")} />
                <InputSmall type="password" name="password" id="" placeholder='Password' {...register("password")} />
                <InputSmall type="password" name="confirm_password" id="" placeholder='Confirm Password' {...register("confirmPassword")} />
                <Button type="submit">Create account</Button>
              </Column>
            </Form>
          </Column>
          </Widget>
          <Footer className="abajo">
            <p>or sign in with</p>
            <img src={facebook} alt="icon" width="30" />
            <img src={facebook} alt="icon" width="30" />
            <img src={facebook} alt="icon" width="30" />

            <footer>
              <h6>
                {" "}
                Do you have an account ?{" "}
                <Link to="/login">
                  <p>Register now</p>
                </Link>
              </h6>
            </footer>
          </Footer>
       
      </Container>
    </>
  )
};
