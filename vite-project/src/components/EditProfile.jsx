import { useNavigate, useParams, Link } from "react-router-dom";
import { Column, InputSmall } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
//import { GlobalGridStyles } from "../styles/GlobalGridStyless";
import { AuthContext } from "../auth/authContext/AuthContext";

import {
  Form,
  Input,
  Button,
  UserProfile,
  UserImg,
  BtnEdit,
  Texto,
} from "../ui";

export const EditProfile = () => {
  const { editId } = useParams();
  //   console.log(editId);
  const { logout, authState } = useContext(AuthContext);
  const { isLogged, userData } = authState;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  return (
    <>
      <Form action="" onSubmit={handleSubmit()}>
        <Column>
          <InputSmall
            type="text"
            placeholder={userData?.username}
            {...register("username")}
          />
          <InputSmall
            type="text"
            placeholder={userData?.firstName}
            {...register("name")}
          />
          <InputSmall
            type="text"
            placeholder={userData?.lastName}
            {...register("last_name")}
          />
          <InputSmall
            type="email"
            placeholder={userData?.email}
            {...register("email")}
          />
          <InputSmall
            type="text"
            placeholder="New Password"
            {...register("address")}
          />

          <Button type="submit">Save</Button>
        </Column>
      </Form>
    </>
  );
};
