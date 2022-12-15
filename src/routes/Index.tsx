//components
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Validate } from "../api/auth";

//redux
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setAuth, unSetAuth } from "../store/reducer/auth/auth";

//components
import Admin from "./Admin";
import Guest from "./Guest";
import Loading from "../pages/guest/Loading";

export default function Routes() {
  const dispatch = useAppDispatch();
  const { checked, success } = useAppSelector((state: RootState) => state.auth);

  const cookiesToken = Cookies.get("token") as string;

  const handleValidateToken = (token: string) => {
    Validate(token)
      .then((res) => {
        if (res.data.meta.success) {
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
        dispatch(unSetAuth());
      });
  };

  useEffect(() => {
    if (!checked && cookiesToken === "") {
      dispatch(unSetAuth());
    } else if (!checked && cookiesToken !== "") {
      handleValidateToken(cookiesToken);
    }
  }, [cookiesToken]);

  if (checked && success) {
    return <Admin />;
  } else if (checked && !success) {
    return <Guest />;
  } else {
    return <Loading />;
  }
}
