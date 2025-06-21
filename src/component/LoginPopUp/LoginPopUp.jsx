import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowlogin }) => {
  const [current, setCurrent] = useState("Login");

  return (
    <div className="absolute z-1 bg-[#00000090] sm:w-[100%] w-[145%] h-[150%] grid ">
      <form
        action=""
        className="place-self-center bg-white text-gray-500  p-8 flex flex-col gap-5 rounded-2xl fade-in"
      >
        <div className="flex justify-between text-black items-center">
          <h2 className="text-3xl font-bold">{current}</h2>
          <img
            onClick={() => {
              setShowlogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          {current === "Login" ? (
            <></>
          ) : (
            <input
              className="border px-3 py-3 rounded-lg"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            className="border px-3 py-3 rounded-lg"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="border px-3 py-3 rounded-lg"
            type="password"
            placeholder="Pass word"
            required
          />
        </div>
        <button className="bg-orange-600 cursor-pointer text-gray-50 font-medium rounded-lg text-xl py-3">
          {current === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start">
          <input
            className="border px-3 py-3 rounded-lg mr-1 mt-2 cursor-pointer"
            type="checkbox"
            required
          />
          <p className="text-lg">By continuing, i agree to the terms of use & <br/>privacy ploicy.</p>
        </div>
        {current === "Login" ? (
          <p className="text-lg">
            Create a new acount?{" "}
            <span className="text-orange-600 font-medium cursor-pointer " onClick={() => setCurrent("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p className="text-lg">
            Already have an account?
            <span className="text-orange-600 font-medium cursor-pointer" onClick={() => setCurrent("Login")}> Log In here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
