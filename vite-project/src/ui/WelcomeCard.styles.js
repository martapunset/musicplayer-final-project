import styled from "styled-components";

export const WelcomeCard = styled.div`
  display: grid;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  margin: 25px auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 15px;
  width: 275px;
  height: 50px;
  background: #64c27b;
  border-radius: 30px;

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    margin-top: 15px;
    width: 275px;
    height: 50px;
  }
`;

export const WelcomeTitle = styled.h1`
  margin: auto;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
  color: #ffffff;

  @media only screen and (min-width: 1200px) {
    margin: auto;
    display: flex;
    align-items: center;
    width: fit-content;
    height: 40px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
    color: #ffffff;
  }
`;
