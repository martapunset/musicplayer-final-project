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
                <NavLink to={item.path}>
                  <span>{item.icon} </span>
                  <span>{item.text}</span>
                </NavLink>
                <NavLink to={item.path}>
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
  align-items: start;
  padding-left: 15%;
  width: 10%;
  bottom: 0 vh;
  background: #18191e;
  
  .container {
    padding: 0;
    margin-top: 3px;
    font-size: 45px;
    cursor: pointer;
  }
  .container li a {
    font-size: 3vh;
    color: white; 
    
  }

  .container .active {
    ${'' /* border-top: 7px solid white; */}
    ${'' /* border-radius: 5px; */}
    color: yellow;
  }
  @media screen and (min-width: 768px){
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: space-between
    width: 100%;
  }
  @media only screen and (min-width: 1024px) {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;

    .navbar {
      padding: 0;
      ${'' /* margin-top: 3px; */}
      font-size: 45px;
      cursor: pointer;
    }
    .navbar li a {
      color: white;
    }
    .active {
      border-top: 7px solid white;
      border-radius: 5px;
    }
  }
`;
