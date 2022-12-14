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
            <div key={index} className="navbar">
              <li>
                <NavLink to={item.path}>
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
`;
