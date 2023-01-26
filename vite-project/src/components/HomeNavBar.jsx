import { NavLink } from "react-router-dom";
import { navBarData } from "../utils/navBarData";
import { WrapperNav } from "../ui/NavbarrStyles";
export const HomeNavBar = () => {
  return (
    <>
      <WrapperNav>
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
                <NavLink to={item.path}></NavLink>
              </li>
            </div>
          );
        })}
      </WrapperNav>
    </>
  );
};
