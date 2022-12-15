import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { string } from "prop-types";

interface IAuth {
  name: string;
  token: string;
  email: string;
  id: string | number;
  success: boolean;
  checked: boolean;
}

interface IAuthPayload {
  id: number | string;
  token: string;
  name: string;
  email: string;
}

const token = Cookies.get("token") as string;
console.log(token);
const initialState: IAuth = {
  name: "",
  token: token || "",
  email: "",
  id: "",
  success: false,
  checked: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthPayload>) => {
      const { email, id, name, token } = action.payload;

      state: {
        (state.token = token),
          (state.checked = true),
          (state.success = true),
          (state.name = name),
          (state.email = email);
      }
    },
    unSetAuth: (state) => {
      state: {
        (state.checked = true), (state.success = false), (state.token = token);
        (state.email = ""), (state.name = ""), (state.id = 0);
      }
    },
  },
});

export const { setAuth, unSetAuth } = authSlice.actions;

export default authSlice.reducer;
