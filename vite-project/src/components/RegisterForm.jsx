import { useForm } from "react-hook-form";
import { postUsers, getUsers } from "../api/postUsers";
import { Navigate } from "react-router-dom";
import { Form, InputSmall, Button, Column, Footer, FooterIcon, Spam, H1, P } from "../ui";
import { useState } from "react";

export const RegisterForm = () => {
  const [isRegistered, setisRegistered] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    //falta destructuring data
    if (data.password !== data.confirmPassword) { return alert('password doesn´t match') }
    const validateUser = async () => {
      const user = await (getUsers(data.email))
      user ? alert('this user already exists') : postUsers(data);
      setisRegistered(true);

    };
    validateUser();
  }

  console.log(watch("name")); // watch input value by passing the name of it
  //  "handleSubmit" will validate your inputs before invoking "onSubmit"

  return (
    <>
      {isRegistered && <Navigate to="/login" replace={true} />}

      <Form action="" onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <InputSmall type="text" placeholder='Username' {...register("username")} />
          <InputSmall type="text" placeholder='Name' {...register("name")} />
          <InputSmall type="text" placeholder='Last Name' {...register("last_name")} />
          <InputSmall type="email" placeholder='Email' {...register("email")} />
          <InputSmall type="text" placeholder='Address' {...register("address")} />
          <InputSmall type="password" placeholder='Password' {...register("password")} />
          <InputSmall type="password" placeholder='Confirm Password' {...register("confirmPassword")} />
          <Button type="submit">Create account</Button>
        </Column>
      </Form>

    </>
  )
};
