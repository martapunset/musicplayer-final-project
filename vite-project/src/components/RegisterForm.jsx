import { useForm } from "react-hook-form";
import { Button, Input, InputSmall } from "../ui/Buttons.style";

import { Form } from "../ui/Form";

export const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    return (
        <>
            
 

            
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <InputSmall  {...register("name", { required: true })} placeholder="Name" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <InputSmall {...register("surname", { required: true })} placeholder="Surname"  />
      {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <InputSmall {...register("email", { required: true })} placeholder="Email"  />
      {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                

                <InputSmall {...register("surname", { required: true })} placeholder="Username"  />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <InputSmall {...register("surname", { required: true })} placeholder="Username"  />
      {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <InputSmall {...register("surname", { required: true })} placeholder="Username"  />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
      <Button type="submit"> Save</Button>
    </Form>
        
      </>
    );
  };
  
  
  