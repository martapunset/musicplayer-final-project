import { useNavigate, useParams, Link } from "react-router-dom";
import { Column, InputSmall } from "../ui";
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
  const onSubmit = (data, e) => console.log("data Form",data, e);

  return (
    <>
        <Form action="" onSubmit={handleSubmit(onSubmit)}>

      
      <div><label>Username</label><InputSmall type="text"placeholder={user?.userName}    {...register("username")}/></div> 
             <div><label>Name</label><InputSmall  type="text" placeholder={user?.firstName} {...register("firstname")}/></div> 
             <div><label>First Name</label><InputSmall  type="text" placeholder={user?.lastName}    {...register("lastname")}/></div> 
            <div><label>Email</label><InputSmall  type="email" placeholder={user?.email}    {...register("email")}/></div> 
            <button>Save</button>
    
      </Form>
      
      {/* 
      
      


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
          
      */}
    </>
  );
};
