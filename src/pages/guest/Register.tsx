import React from "react";

const Register = () => {
  return (
    <div className="p-10 text-white">
      <div className="w-[120px] bg-[#333]   p-2 ">
        <h5 className="tracking-[2px] text-lg">
          <span className="font-medium">THEGOOD</span> NETWORK
        </h5>
      </div>

      <div className="mt-6 border-t w-16"></div>

      <div className="mt-12">
        <h1>
          <span className="block text-[20px] font-bold">We are</span>
          <p className="text-[35px] tracking-wide font-light">
            invite only right now.
          </p>
        </h1>
        <p>10 Million+ people have joined our newwork.</p>
        <p>We invite you to join the tribe</p>
      </div>

      <div className="mt-[14rem]">
        <h1 className="text-[25px] font-bold">Already have an account?</h1>
        <button className="mt-2 font-bold text-lg">Sign in</button>
      </div>
    </div>
  );
};

export default Register;
