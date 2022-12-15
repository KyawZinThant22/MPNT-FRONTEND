import axios from "axios";
import { plainJsonHeader, authJsonHeader } from "../header";
import { ILoginPayLoad } from "./types";

const URL = import.meta.env.VITE_REACT_APP_BACKEND_SERVER;

export const Validate = async (token: string) => {
  return await axios({
    url: `${URL}auth/me`,
    method: "GET",
    headers: authJsonHeader(token),
  });
};

export const Login = async ({ email, password }: ILoginPayLoad) => {
  return await axios({
    url: `${URL}auth/login`,
    method: "POST",
    headers: plainJsonHeader(),
    data: {
      email: email,
      password: password,
    },
  });
};
