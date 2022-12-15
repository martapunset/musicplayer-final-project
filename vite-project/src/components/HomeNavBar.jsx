import { NavLink } from "react-router-dom";
import { navBarData } from "../utils/navBarData";

import styled from "styled-components";
//import { GlobalStyle } from "../styles/globalStyles";

export const HomeNavBar = () => {
  
  return (
    <>
      <WrapperNav>
        {navBarData.map((item, index) => {
          return (
            <div key={index} className="container">
              <li>
                <NavLink className="menu_link" to={item.path}>
                  <span>{item.icon}</span>
                </NavLink>
              </li>
            </div>
          );
        })}
      </WrapperNav>
    </>
  );
};

const WrapperNav = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  .container {
    padding: 0;
    margin-top: 3px;
    font-size: 45px;
    cursor: pointer;
  }
  .container li a {
    color: #9bfab0;
  }
  .active {
    border-top: 7px solid #9bfab0;
    border-radius: 5px;
  }

  @media only screen and (min-width: 1200px) {
    list-style: none;
    position: fixed;
    top: 10px;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 20%;

    .navbar {
      padding: 0;
      margin-top: 3px;
      font-size: 45px;
      cursor: pointer;
    }
    .navbar li a {
      color: #9bfab0;
    }
    .active {
      border-top: 7px solid #9bfab0;
      border-radius: 5px;
    }
  }
`;
