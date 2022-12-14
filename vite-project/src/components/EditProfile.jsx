import { useNavigate, useParams, Link } from "react-router-dom";
import { Column, InputSmall } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
//import { GlobalStyle } from "../styles/globalStyles";
import { AuthContext } from "../auth/authContext/AuthContext";

import { Form, Input, Button, UserProfile, UserImg , BtnEdit, Texto } from "../ui";


export const EditProfile = () => {
  const { editId } = useParams();
  //   console.log(editId);
  const { logout, authState } = useContext(AuthContext);
  const { isLogged, userProfile } = authState;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  return (
    <>
       

            <Form action="" onSubmit={handleSubmit()}>
              <Column>
                <InputSmall type="text" placeholder={userProfile?.first_name} {...register("name")} disabled />
                <InputSmall type="text" placeholder={userProfile?.last_name} {...register("last_name")} disabled/>
                <InputSmall type="email" placeholder='Email' {...register("email")} disabled/>
                <InputSmall type="text" placeholder='Adress' {...register("address")} disabled/>

                <Button type="submit">Save</Button>
              </Column>
            </Form>
          
    </>
  );
};

