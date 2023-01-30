import styled from "styled-components";

export const ProfileImage = styled.img`
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 54px;

  @media only screen and (min-width: 1200px) {
    margin-left: 15px;
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 54px;
  }
  @media only screen and (max-width: 800px) {
    margin: auto;
    width: 40px;
    height: 40px;
    border-radius: 54px;
  }
`;
