import { useNavigate, useParams, Link } from "react-router-dom";
import { Column, GlobalGridStyles, InputSmall } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { Form, Button } from "../ui";

export const EditProfile = () => {
  const { editId } = useParams();
  const { logout, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  return (
    <>
    <GlobalGridStyles/>
    <p>holaedit profile</p>
      <Form className="main" action="" onSubmit={handleSubmit()}>
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
