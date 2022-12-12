import { useForm } from "react-hook-form";
import { postUsers, getUsers } from "../api/postUsers";
import { Button, InputSmall } from "../ui";

import { Form } from "../ui/Form";

export const RegisterForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
//falta destructuring data
    if (data.password !== data.confirmPassword) {return alert('password doesn´t match')}
    const validateUser = async() => {
      const user = await(getUsers(data.email))
      user ? alert('this user already exists') : postUsers(data);
      
    };
    validateUser();
  }

  console.log(watch("name")); // watch input value by passing the name of it
  //  "handleSubmit" will validate your inputs before invoking "onSubmit"


  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <InputSmall
          type="text" {...register("name", { required: true })}
          placeholder="Name"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <InputSmall
          type="text" {...register("first_name", { required: true })}
          placeholder="First name"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <InputSmall
          type="email"{...register("email", { required: true})}
          placeholder="Email"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <InputSmall
          type="text" {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <InputSmall
          type="password" {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <InputSmall
          type="password" {...register("confirmPassword", { required: true })}
          placeholder="Confirm Password"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit"> Save</Button>
      </Form>
    </>
  );
};
