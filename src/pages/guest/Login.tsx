import React from "react";
import LoginPage from "./LoginPage";

const Login = () => {
  return (
    <div className="flex  h-screen">
      <div className="w-[60%]  bg-red-400 lg:grid hidden"></div>
      <div className="w-[40%] h-screen justify-center items-center grid ">
        <div className=" h-[30rem] w-[400px]   mx-auto">
          <LoginPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
