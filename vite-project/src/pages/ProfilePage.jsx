import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { InputProfile, UserProfile, UserImg, BtnEdit, Texto, BackgroundColour, TextArea, ProfileTableStyle } from "../ui";
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
console.log(user.email);
  return (
    <>
      <BackgroundColour>
        <Main className="main">
          <Column>
            <UserProfile>
            <div className="non">
              <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
              <BtnEdit>
                <Link to="/editProfile">
                  {" "}
                  <Texto>Edit Profile</Texto>
                </Link>
              </BtnEdit>
            </div>
            </UserProfile>
            <ProfileTableStyle>
              <div><label className="line">Username:</label><TextArea> {user?.userName}</TextArea></div>
              <div><label className="line">Name:</label><TextArea> {user?.firstName}</TextArea></div>
              <div><label className="line">First Name:</label><TextArea> {user?.lastName}</TextArea></div>
              <div><label className="line">Email:</label><TextArea> {user?.email}</TextArea></div>
            </ProfileTableStyle>
            {/* <LogoutButton /> */}
          </Column>
        </Main>
      </BackgroundColour>
    </>
  );
}