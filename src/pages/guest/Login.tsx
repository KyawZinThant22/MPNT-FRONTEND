import LoginPage from "./LoginPage";
import LoginBanner from "../../assets/image/login-banner.jpg";
import Register from "./Register";
const Login = () => {
  return (
    <div className="flex ">
      <div className="w-[65%] xl:grid hidden relative ">
        <img
          src={LoginBanner}
          alt="login-banner"
          className=" w-full bg-top h-screen  "
        />
        <div className="h-[40rem] w-[45%]   absolute top-[50%] left-[50%] bg-opacity-10 placeCenterCss rounded-lg shadow-lg ">
          <Register />
        </div>
      </div>
      <div className="w-[35%] justify-center  h-screen items-center grid mx-auto ">
        <div className=" h-[30rem] w-[400px]   mx-auto">
          <LoginPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
