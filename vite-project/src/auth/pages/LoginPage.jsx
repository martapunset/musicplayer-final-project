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
  InputSmall,
  FooterIcon,
  H1, 
  P
} from "../../ui";

export const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  //const onSubmit = data => console.log(data);

  //console.log('Error', errors);
  //console.log('Submitted', isSubmitted);


  //const navigate = useNavigate();

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
            <H1>Sign In</H1>
            <P>If you need any support <Link to="/support">Click here</Link></P>
            <form onSubmit={handleOnSubmit}>
              <Column>
                <InputSmall type="email" placeholder="Enter email" {...register("userName", { required: true })} />
                <InputSmall type="password" placeholder="Enter password" {...register("userPass")} />
                {errors.password && <p>{errors.password?.message}</p>}
                <Link to="/recovery"> Recovery password</Link>
                <Button type="submit">Sign In</Button>
              </Column>
            </form>
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
                <Textsmall>Not a member?
                  <Link to="/register" >

                  </Link>
                  <Spam >&nbsp; Sign in</Spam>
                </Textsmall>
              </h6>

            </div>
          </Column>

        </Footer>

      </Container>
    </>
  );
};

