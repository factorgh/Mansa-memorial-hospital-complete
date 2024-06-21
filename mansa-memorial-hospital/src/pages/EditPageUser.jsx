import { useEffect } from "react";
import Form from "../components/Form";

import { useForm } from "react-hook-form";
import { useGetOneUser } from "../hooks/useGetOneUser";
import { useParams } from "react-router-dom";
import { useUpdateUser } from "../hooks/useUpdateUser";
const EditPageUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();

  const { updateUser } = useUpdateUser(id);

  const { user } = useGetOneUser(id);

  useEffect(
    function () {
      reset(user);
    },
    [reset, user]
  );

  const onSubmit = (data) => {
    console.log(data);
    if (!data) return;

    updateUser(data);
  };

  // const handleNavigate = () => {
  //   toast(" Account Added 👍🏿");
  //   navigate("/employees");
  // };
  return (
    <div className="w-full px-8 py-8">
      <div className=" w-full h-full bg-white rounded-md p-10 flex flex-col justify-center items-center ">
        <div className="w-full flex items-start border-b border-slate-300 p-3 mb-10">
          <h3 className="text-xl font-normal">Edit account</h3>
        </div>

        <form
          action=""
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <Form title="First name ">
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="Enter first name"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
            <Form title="Last name" placeholder="Enter last Name">
              <input
                type="text"
                {...register("lastName", {
                  required: "last name is required",
                })}
                placeholder="Enter last name"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <div className="flex gap-4">
            <Form title="Select role">
              <select
                {...register("role")}
                className="w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none mx-2 text-gray-500 font-light "
              >
                <option value="other">
                  Choose whether you a nurse or lab technician
                </option>
                <option value="nurse">Nurse</option>
                <option value="manager">Manager</option>
                <option value="lab-tech">Lab technician</option>
              </select>
            </Form>
            <Form title="Username">
              <input
                type="text"
                {...register("username", {
                  required: "username is required",
                })}
                placeholder="Enter a username"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <div className="flex gap-4">
            <Form title="Phone number">
              <input
                type="text"
                {...register("phoneNumber", {
                  required: "phone number is required",
                })}
                placeholder="Enter a phone number"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
            <Form title="Password">
              <input
                type="text"
                {...register("password", {
                  required: "password is required",
                })}
                placeholder="Enter a password"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <button
            className="p-3 bg-blue-600 w-[500px] text-white rounded-md"
            type="submit"
          >
            Edit account
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPageUser;
