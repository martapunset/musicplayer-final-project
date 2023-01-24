import { NavLink } from "react-router-dom";
import { navBarData } from "../utils/navBarData";
import styled from "styled-components";

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
  bottom: 0 vh;
  background: #18191e;
  
  .container {
    padding: 0;
    margin-top: 3px;
    font-size: 45px;
    cursor: pointer;
  }
  .container li a {
    color: #33fff3; 
    ${'' /* #dfff33 */}
  }
  .active {
    border-top: 7px solid #33fff3;
    border-radius: 5px;
  }

  @media only screen and (min-width: 1024px) {
    list-style: none;
    height: 80vh;
    display: flex;
    flex-direction: column;
    width: 300px;

    .navbar {
      padding: 0;
      margin-top: 3px;
      font-size: 45px;
      cursor: pointer;
    }
    .navbar li a {
      color: #33fff3;
    }
    .active {
      border-top: 7px solid #33fff3;
      border-radius: 5px;
    }
  }
`;
