import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { InputProfile, UserProfile, UserImg, BtnEdit, Texto } from "../ui";
import { Column, Main } from "../ui/model";
import { LogoutButton } from "../components/Login/LogoutButton";

export const ProfilePage = () => {
  // const { logout, authState } = useContext(AuthContext);
  // const { isLogged, user } = authState;
  // const { login, authState } = useContext(AuthContext); //userDAta for profile
  // const { isLogged, userData } = authState; //userDAta for profile
  // console.log("userDAta for Toni", userData); //userDAta for profile
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  return (
    <>
      <Main className="main">
        <Column>
          <UserProfile>
            <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
            <BtnEdit>
              <Link to="/editProfile">
                {" "}
                <Texto>Edit Profile</Texto>
              </Link>
            </BtnEdit>
          </UserProfile>

          <InputProfile placeholder={user.firstName}/>
          <InputProfile placeholder={user.lastName}/>

          <LogoutButton />
        </Column>
      </Main>

    </>
  );
}
