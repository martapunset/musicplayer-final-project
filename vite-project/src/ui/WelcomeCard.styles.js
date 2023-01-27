import styled from "styled-components";

export const WelcomeCard = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
  ${'' /* opacity: 100%; */}

  @media only screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    width: 120px;
    height: 50px;
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    width: 120px;
    height: 50px;
  }
`;

export const WelcomeTitle = styled.h1`
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 150px;
  height: 40px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
  color: #ffffff;

  @media only screen and (min-width: 1200px) {
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
