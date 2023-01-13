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
  const { isLogged, user } = authState;
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
            placeholder={user?.username}
            {...register("username")}
          />
          <InputSmall
            type="text"
            placeholder={user?.first_name}
            {...register("name")}
          />
          <InputSmall
            type="text"
            placeholder={user?.last_name}
            {...register("last_name")}
          />
          <InputSmall
            type="email"
            placeholder={user?.email}
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
