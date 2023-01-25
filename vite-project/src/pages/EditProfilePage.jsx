import { AuthGridStyles } from "../ui/authGridStyles";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { LogoProfile, UserProfile, UserImg } from "../ui/index";
import logoHarmony from "../assets/img/logoHarmony.png"
import { IconBack } from "../ui/model";
import { MdArrowBackIos } from "react-icons/md";
import { Header, Column, Container, Sidebar, Main, Widget } from "../ui/model";
import { EditProfile } from "../components";

export const EditProfilePage = () => {
  return (
    <>
        <Main className="">
          <Column>
            <UserProfile>
              <UserImg src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true" />
            </UserProfile>
            <EditProfile />
          </Column>
        </Main>
    </>
  );
};