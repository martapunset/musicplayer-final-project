import { useParams } from "react-router-dom";
import { Form, InputSmall, TextArea } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";

export const EditProfile = () => {
  const { editId } = useParams();
  const { logout, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = (data, e) => console.log("data Form", data, e);

  return (
    <>
      <Form action="" onSubmit={handleSubmit(onSubmit)}>
        <div><label>Username</label><InputSmall type="text" placeholder={user?.userName}    {...register("username")} /></div>
        <div><label>Name</label><InputSmall type="text" placeholder={user?.firstName} {...register("firstname")} /></div>
        <div><label>First Name</label><InputSmall type="text" placeholder={user?.lastName}    {...register("lastname")} /></div>
        <div><label>Email</label><InputSmall type="email" placeholder={user?.email}    {...register("email")} /></div>
        <button className="bt-save">Save</button>
      </Form>
    </>
  );
};
