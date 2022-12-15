import React from "react";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button, TextField } from "../../components/Elements/form";
import { Login } from "../../api/auth";
import { useAppDispatch } from "../../store/hook";
import { setAuth, unSetAuth } from "../../store/reducer/auth/auth";
import Cookies from "js-cookie";

interface ILoginFormProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  //instance
  const dispatch = useAppDispatch();

  // schema
  const schema = Yup.object().shape({
    email: Yup.string().required("Email  is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 8 characters")
      .max(32, "Password must be at most 32 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ILoginFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginFormProps) => {
    Login({
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        if (res.data.meta.success) {
          Cookies.set("token", res.data.body.token);
          dispatch(
            setAuth({
              email: res.data.body.email,
              id: res.data.body.id,
              name: res.data.body.name,
              token: res.data.body.token,
            })
          );
          //  FIXME:
        } else {
          dispatch(unSetAuth());
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Button
            label="Sign up"
            variant="primary"
            type="submit"
            submitting={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
