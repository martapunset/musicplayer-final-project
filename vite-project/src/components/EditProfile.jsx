import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import spotify from "../assets/img/SpotifyVector.png";
import woman from "../assets/img/woman.png";

import { GlobalStyle } from "../styles/globalStyles";

import { Container } from "../styles/model";
import { Form, Input } from "../ui/Form";

export const EditProfile = () => {
  const { editId } = useParams();
  //   console.log(editId);

  return (
    <>
      <GlobalStyle />
      <Container>
        <imgWrapper>
          <img src={spotify} alt="logo spotify" />
          <img src={woman} alt="logo spotify" />
        </imgWrapper>

        <Form>
          <Input />
        </Form>
      </Container>
    </>
  );
};

const imgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 45px;
  }
`;
