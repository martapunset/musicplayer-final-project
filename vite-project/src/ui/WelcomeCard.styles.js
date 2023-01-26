import styled from "styled-components";

export const WelcomeCard = styled.div`
  margin: 25px auto;
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;



  @media only screen and (min-width: 1200px) {
    display: flex;
    margin-top: 30px;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 80px;
    height: 10px;
    width: 250px;
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
