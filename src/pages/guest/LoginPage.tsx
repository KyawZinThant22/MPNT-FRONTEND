import React from "react";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button, TextField } from "../../components/Elements/form";

interface ILoginFormProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  // schema
  const schema = Yup.object().shape({
    email: Yup.string().required("Email  is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be at most 32 characters"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ILoginFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginFormProps) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1 className="text-[3rem] font-medium ">Sign up</h1>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          register={register("email")}
          name="email"
          type="text"
          labelName="Email address"
          placeholder="Enter your email"
          errors={errors.email?.message}
        />

        <TextField
          register={register("password")}
          name="password"
          type="password"
          labelName="set password"
          placeholder="Enter password"
          errors={errors.password?.message}
        />

        <div className="mt-4">
          <Button label="Sign up" variant="primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
