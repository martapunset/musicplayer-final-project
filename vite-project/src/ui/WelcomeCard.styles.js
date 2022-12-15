import styled from "styled-components";

export const WelcomeCard = styled.div`
  margin: 25px auto;
  display: flex;
  justify-content: center;
  width: 334px;
  height: 118px;
  left: 47px;
  top: 112px;
  background: #64c27b;
  border-radius: 30px;

  @media only screen and (min-width: 1200px) {
    display: flex;
    margin-left: 80%;
    margin-top: 15px;
    width: 275px;
    height: 50px;
  }
`;

export const WelcomeTitle = styled.h1`
  width: 175px;
  height: 73px;
  left: 19px;
  top: 23px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-transform: capitalize;
  color: #ffffff;

  @media only screen and (min-width: 1200px) {
    margin: auto;
    width: 150px;
    height: 40px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
    color: #ffffff;
  }
`;
