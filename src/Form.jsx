import React from "react";
import Select from "react-dropdown-select";
import { useForm, Controller } from "react-hook-form";

import "./Form.css";

function Form() {
  const { register, handleSubmit, control ,formState: { errors } } = useForm();

  const selectOptions = [
    { value: "student", label: "Student" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" }
  ];

  const onSubmit = (data) => {
    debugger
    console.log(data, "999");
  };
  const onError = (Erordata)=>{
    console.log(Erordata)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit,onError)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register('name', { required: "FirstName is required" } )} />
          {errors?.name && errors.name.message}

        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName',{ required: "LastName is required" })} />
          {errors?.lastName && errors.lastName.message}
        </div>

        <div>
          <label htmlFor="contact">Contact No.</label>
          <input
            {...register("contact",{ required: "Contact details is required" })}
          />
          {errors?.contact && errors.contact.message}

        </div>

        <div >
          <label htmlFor="adult">Is 18+ ?</label>
          <input type="checkbox" name="adult"{...register("adult",{ required: "adult required" })} />
          {errors?.adult && errors.adult.message}
        </div>

        <div>ARE YOU A :</div>

        <br></br>

        <Controller
          name="role"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select className="select" options={selectOptions} {...field} label="Text field" />
          )}
        />
        
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
