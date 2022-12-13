import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../assets/img/face.png";
import { postUsers, getUsers } from "../api/postUsers";

import { Form, InputSmall, Button, Container, Header, Widget, Textsmall, IconBack, Column, Footer, FooterIcon, Spam, H1, P} from "../ui";
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

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    //falta destructuring data
    if (data.password !== data.confirmPassword) { return alert('password doesn´t match') }
    const validateUser = async () => {
      const user = await (getUsers(data.email))
      user ? alert('this user already exists') : postUsers(data);

    };
    validateUser();
  }

  console.log(watch("name")); // watch input value by passing the name of it
  //  "handleSubmit" will validate your inputs before invoking "onSubmit"

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
            <H1>Register</H1>
            <P>If you need any support <Link to="/support">Click here</Link></P>
            <Form action="" onSubmit={handleSubmit(onSubmit)}>
              <Column>
                <InputSmall type="text" placeholder='Name' {...register("name")} />
                <InputSmall type="text" placeholder='Last Name' {...register("last_name")} />
                <InputSmall type="email" placeholder='Email' {...register("email")} />
                <InputSmall type="text" placeholder='Adress' {...register("address")} />
                <InputSmall type="password" placeholder='Password' {...register("password")} />
                <InputSmall type="password" placeholder='Confirm Password' {...register("confirmPassword")} />
                <Button type="submit">Create account</Button>
              </Column>
            </Form>
          </Column>
        </Widget>
        <Footer className="footer">
          <Column>
            <div>
              <P>or sign in with</P>
              <center>
                <FooterIcon>


                  <img src={facebook} alt="icon" width="30" height="40" />
                  <img src={facebook} alt="icon" width="30" height="40" />
                  <img src={facebook} alt="icon" width="30" height="40" />
                </FooterIcon>
              </center>

            </div>



            <div>
              <h6>
                <Textsmall>Do you have an account?
                  <Link to="/login">

                  </Link><Spam> &nbsp; Sign in</Spam>
                </Textsmall>
              </h6>
            </div>
          </Column>

        </Footer>

      </Container>
    </>
  )
};
