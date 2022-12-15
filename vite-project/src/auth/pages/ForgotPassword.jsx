import facebook from "../../assets/img/face.png";
import { Link } from "react-router-dom";
import {
  Input,
  Textsmall,
  Title,
  Container,
  Sidebar,
  Header,
  Button,
  Widget,
  Column,
  IconBack,
} from "../../ui";
import { ResponsiveStyles } from "../../ui/homegrid/responsiveStyles";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = {
      email: e.target.email.value,
    };

    setIsLoading(true);
    await axios
      .post("http://localhost:4000/userEmail", { userEmail }) //+ 'forgotpassword' //process.env.REACT_APP_API_URL
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          showConfirmButton: true,
          icon: "success",
          text: "check your email",
        });
      })
      .catch((err) => {
        setIsLoading(true);
        Swal.fire({
          showConfirmButton: true,
          icon: "error",
          text: "error sending data",
        });
      });
  };

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
          <Title>Reset your password</Title>
          <Textsmall>
            Introduce your Spotify username or your email address. We send you
            an email with your username and a link to recover your password.
          </Textsmall>
        </Header>

        <Widget className="widget-1">
          <form onSubmit={handleSubmit}>
            <Column>
              <Input
                type="email"
                name="email"
                placeholder="Enter username or email"
                required
              />
              {isLoading ? <p>wait</p> : <Button type="submit">Send</Button>}
              <Textsmall>
                If you still need help, don´t contact Spotify Support
              </Textsmall>
            </Column>
          </form>
        </Widget>
      </Container>
    </>
  );
};
