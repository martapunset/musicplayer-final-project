import { NavLink } from "react-router-dom";
import { navBarData } from "../utils/navBarData";
import { WrapperNav } from "../ui/NavbarrStyles"
import { LogoProfile } from "../ui";
import logoHarmony from "../assets/img/logoHarmony.png"
import { LogoutButton } from "./Login/LogoutButton";
export const HomeNavBar = () => {

  return (
    <>
      <WrapperNav>
          
      <LogoProfile className="side">
          <img src={logoHarmony} alt="Logo" width={'70px'} height={'50px'} />
        </LogoProfile>
        {navBarData.map((item, index) => {
          return (
            <div key={index} className="container">
              <li>
                <NavLink to={item.path}>
                  <div className="cont">
                    <span>{item.icon} </span>
                    <span>{item.text}</span>
                  </div>
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