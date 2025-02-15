import BrandImage from "../img/brand.png";
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import Proto from "../img/prototype.png";
import Compute from "../img/compute.png";
import Shock from "../img/shock.png";

import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const LoginPage = () => {
  const [toggleVisibilty, setToggleVisibilty] = useState(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { isLoading, login } = useLogin();
  const onSubmit = (data) => {
    if (!data) return;

    login(data, {
      onSettled: () => {
        reset();
      },
    });
  };
  //Hanlde visiblity
  const handleVisibility = () => {
    setToggleVisibilty((prevState) => !prevState);
  };

  return (
    <div className="flex w-screen h-screen bg-gradient-to-r from-[#FFF] to-[#d8e4f1]">
      {/* First section */}
      <div className="flex-1  flex  pt-2">
        <div className="w-full h-full flex flex-col gap-20  items-start mx-auto p-20 ">
          <img
            src={BrandImage}
            className="w-25 h-10 object-contain"
            alt="brand image"
          />
          <div className="p-3 mt-15 w-full">
            <h3 className="text-2xl text-[#004F9E]">Login</h3>
            <h3 className="font-normal pt-5 mb-8">Sign in to your account</h3>
            <form
              method="POST"
              className="w-[80%] h-full flex flex-col flex-1  "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Enter your username"
                {...register("username", {
                  required: true,
                })}
                className="p-3 mb-5 placeholder:text-slate-500 border border-slate-700 rounded-md bg-[#d8e4f1] outline-slate-700 "
              />
              {errors.username && errors.username.type === "required" && (
                <span className="text-orange-500 p-2">
                  This field is required
                </span>
              )}
              <label
                htmlFor=""
                className="w-full flex justify-between items-center border border-slate-700 rounded-md bg-[#d8e4f1]  mb-5 p-3 focus:border focus:border-slate-700"
              >
                <input
                  type={toggleVisibilty ? "password" : "text"}
                  placeholder="Enter a password"
                  className=" outline-none w-full   bg-[#d8e4f1] "
                  {...register("password", { required: true })}
                />
                {toggleVisibilty ? (
                  <FaRegEyeSlash onClick={handleVisibility} />
                ) : (
                  <FaRegEye onClick={handleVisibility} />
                )}
              </label>
              {errors.password && errors.password.type === "required" && (
                <span className="text-orange-500 p-2">
                  This field is required
                </span>
              )}

              <button
                className="p-3 bg-blue-600 text-white rounded-md"
                type="submit"
              >
                {isLoading ? <CircularProgress /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* End of first section  */}
      {/* second section */}
      <div className="flex-1 border rounded-tl-xl bg-[#01367F] mt-3 flex items-center justify-end">
        <img
          src={Proto}
          alt=" protoype"
          className="w-160 h-[700px] object-contain  relative "
        />
        <img
          src={Compute}
          alt="compute"
          className="w-[250px] h-[200px] object-contain absolute top-[600px] right-[400px]"
        />
      </div>
      <img
        src={Shock}
        alt="shock"
        className="w-[250px] h-[150px] object-contain absolute top-[300px] right-[360px]"
      />
    </div>
  );
};

export default LoginPage;
