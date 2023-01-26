import { useNavigate, useParams, Link } from "react-router-dom";
import { Column, InputSmall } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { Form, Button } from "../ui";

export const EditProfile = () => {
  const { editId } = useParams();
  const { logout, authState } = useContext(AuthContext);
  const { isLogged, userData } = authState;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = (data, e) => console.log("data Form",data, e);

  return (
    <>
      <Form action="" onSubmit={handleSubmit(onSubmit)}>
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
