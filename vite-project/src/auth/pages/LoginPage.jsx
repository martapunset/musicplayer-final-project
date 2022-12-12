import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { useForm } from "react-hook-form";
import { ResponsiveStyles } from "../../ui/homegrid/ResponsiveStyles";
import { MdArrowBackIos } from "react-icons/md";
import facebook from "../../assets/img/face.png";
import icono from "../../assets/img/icono.png";
import {
  Header,
  Sidebar,
  Container,
  Widget,
  IconBack,
  Title,
  Textsmall,
  Spam,
  Column,
  Input,
  Button,
  Footer,
  Main,
} from "../../ui";

export const LoginPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitted },
  // } = useForm();

  /* ******* */

  const { user, setUser, loginState, setLoginState } = useContext(AuthContext);

  //---------------------------------------------------------------------//

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("users"));
    fetchDatauser();
    setUser(auth);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  const fetchDatauser = async () => {
    const petiApi = await fetch("http://localhost:4000/user");
    const data = await petiApi.json();
    setLoginState(data);
  };

  //---------------------------------------------------------------------//

  //3. añadir el usuario al sessionstorage
  useEffect(() => {
    let interin = JSON.parse(sessionStorage.getItem("users"));
    setUser(interin);
  }, []);
  useEffect(() => {
    sessionStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //1.recoger info del formulario
    let userInput = {
      userName: e.target.userName.value,
      pass: e.target.userPass.value,
    };
    console.log(userInput);

    //2.comprobar que los datos sean correctos
    const Auth = loginState.find(
      (user) =>
        userInput.userName === user.email && userInput.pass === user.password
    );

    if (Auth) {
      setUser(Auth);
      alert("User registered successfully");

      
    } else {
      alert("Unregistered user, or incorrect data");
      //navigate("/");
    }
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
        </Header>

        <Widget className="widget-1">
          <Column>
            <h1>Sign In</h1>
            <p>
              If you need any support <Link to="/support">Click here</Link>
            </p>
            <form onSubmit={handleOnSubmit}>
              <Column>
                {/* <Input
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                <Input type="password" placeholder="Enter password" /> */}

                <Input type="text" name="userName" placeholder="Tu nombre" />

                <Input type="text" name="userPass" placeholder="Tu password" />

                {/* {errors.password && <p>{errors.password?.message}</p>} */}
                <Link to="/recoverypass"> Recovery password</Link>
                <Button type="submit">Sign In</Button>
              </Column>
            </form>
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
              Not a member ?{" "}
              <Link to="/register">
                <p>Register now</p>
              </Link>
            </h6>
          </footer>
        </Footer>
      </Container>
    </>
  );
};
