import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import {
  UserProfile,
  UserImg,
  ProfileTableStyle,
  BackgroundColour,
  Main,
  Texto,
} from "../ui/index";
// import { Main } from "../ui/model";
import { EditProfile } from "../components";

export const EditProfilePage = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  return (
    <>
      <Main className="main">
        <BackgroundColour>
          <UserProfile>
            <div className="image">
              <UserImg
                src={
                  user.picture
                    ? user.picture
                    : "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
                }
              />
              <button className="bt-ed">
                <Link to="">
                  {/* que lleve a cloudinary */}
                  <Texto>Edit Image</Texto>
                </Link>
              </button>
            </div>
          </UserProfile>
          <ProfileTableStyle>
            <EditProfile></EditProfile>
          </ProfileTableStyle>
        </BackgroundColour>
      </Main>
    </>
  );
};
