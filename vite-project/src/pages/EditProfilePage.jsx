import { AuthGridStyles } from "../ui/authGridStyles";
import React, { useContext } from "react";
import { LogoProfile, UserProfile, UserImg, InputSmall, ProfileTableStyle, BackgroundColour } from "../ui/index";
import { IconBack } from "../ui/model";
import { MdArrowBackIos } from "react-icons/md";
import { Header, Column, Container, Sidebar, Main, Widget } from "../ui/model";
import { EditProfile } from "../components";
import { AuthContext } from "../auth/authContext/AuthContext";

export const EditProfilePage = () => {
  //  const { login, authState } = useContext(AuthContext);
  //const { isLogged, user } = authState;

  return (
    <>
      <BackgroundColour>
        <Main className="">
          <Column>
            <UserProfile>
              <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
            </UserProfile>
            <ProfileTableStyle>
              <EditProfile>
              </EditProfile>
            </ProfileTableStyle>
          </Column>
        </Main>
      </BackgroundColour>
    </>
  );
};