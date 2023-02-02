import { AuthContext } from "../auth/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";

import { updateUsers } from "../api/postUsers";
import { Form, InputSmall, ErrorsParagraph } from "../ui";
import { toast } from "react-hot-toast";

export const EditProfile = () => {
  const navigate = useNavigate();

  const { logout, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;
  const [updatedUserInfo, setUpdatedUserInfo] = useState(user);

  const { _id } = user;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: user,
  });

  useEffect(() => {}, [updatedUserInfo]);

  const onSubmit = (data) => {
    const userData = { _id, ...data };
    updateUsers(userData);
    setUpdatedUserInfo(userData);

    toast.success("Successfully updated");
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>

          <InputSmall
            type="text"
            placeholder={user?.userName}
            {...register("userName", {
              minLength: {
                value: 5,
                message: "Min length is 5",
              },
            })}
          />
        </div>
        <ErrorsParagraph>{errors.userName?.message}</ErrorsParagraph>
        <div>
          <label>First Name</label>
          <InputSmall
            required
            type="text"
            placeholder={user?.firstName}
            {...register("firstName")}
          />
        </div>
        <ErrorsParagraph>{errors.firstName?.message}</ErrorsParagraph>
        <div>
          <label>Last Name</label>
          <InputSmall
            required
            type="text"
            placeholder={user?.lastName}
            {...register("lastName")}
          />
        </div>
        <ErrorsParagraph>{errors.lastName?.message}</ErrorsParagraph>
        <div>
          <label>Email</label>
          <InputSmall type="email" placeholder={user?.email} disabled />
        </div>

        <button className="bt-save">Save</button>
      </Form>
    </>
  );
};
