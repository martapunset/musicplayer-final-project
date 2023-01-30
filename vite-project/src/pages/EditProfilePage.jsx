import React from "react";
import { UserProfile, UserImg, ProfileTableStyle, BackgroundColour } from "../ui/index";
import { Column, Main } from "../ui/model";
import { EditProfile } from "../components";

export const EditProfilePage = () => {
  // const { login, authState } = useContext(AuthContext);
  // const { isLogged, user } = authState;

  return (
    <>
      <Main className="main">
        <BackgroundColour>
          <UserProfile>
            <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
          </UserProfile>
          <ProfileTableStyle>
            <EditProfile>
            </EditProfile>
          </ProfileTableStyle>
        </BackgroundColour>
      </Main>
    </>
  );
};