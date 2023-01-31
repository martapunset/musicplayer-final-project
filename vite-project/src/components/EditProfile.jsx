import { useParams } from "react-router-dom";
import { Form, InputSmall, TextArea } from "../ui";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext/AuthContext";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { UserImg } from "../ui/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EditProfile = () => {
  const { editId } = useParams();

  const { logout, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  // console.log(user);

  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(user);

  const upDateUser = () => {
    setNewUser({ ...user, newUser });
  };

  const fileTypes = ["JPG", "PNG", "JPEG"];

  const handleChange = (file) => {
    setNewUser({ ...user, file: file });
    console.log(file);
  };

  const onEdit = async () => {
    try {
      const formData = new FormData();

      Object.keys(newUser).forEach((key) => {
        formData.append(key, newUser[key]);
      });

      formData.append("_id", editId);
      const response = await axios.post("http://localhost:4000/user", formData);

      if (response.data.success) {
        alert("Profile updated successfully");
        upDateUser(response.data.data);
        navigate("/profile");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const onSubmit = (data, e) => console.log("data Form", data, e);

  return (
    <>
      <UserImg src={newUser?.picture} />

      <Form action="" onSubmit={handleSubmit(onSubmit)}>
        <img />
        <div>
          <label>Username</label>
          <InputSmall
            type="text"
            placeholder={newUser?.userName}
            {...register("username")}
          />
        </div>
        <div>
          <label>Name</label>
          <InputSmall
            type="text"
            placeholder={newUser?.firstName}
            {...register("firstname")}
          />
        </div>
        <div>
          <label>First Name</label>
          <InputSmall
            type="text"
            placeholder={newUser?.lastName}
            {...register("lastname")}
          />
        </div>
        <div>
          <label>Email</label>
          <InputSmall
            disabled
            type="email"
            placeholder={newUser?.email}
            {...register("email")}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>
        <button className="bt-save" onClick={onEdit}>
          Save
        </button>
      </Form>
    </>
  );
};
