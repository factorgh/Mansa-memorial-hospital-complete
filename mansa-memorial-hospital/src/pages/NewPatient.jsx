// import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
// import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useCreatePatient } from "../hooks/useCreatePatient";
import { useContext } from "react";
import { TimerContext } from "../context/timerContext";

const NewPatient = () => {
  const { updateStartTime } = useContext(TimerContext);
  // const handleNavigate = () => {
  //   toast(" Account Added 👍🏿");
  //   navigate("/patients");
  // };
  // const navigate = useNavigate();
  const { createPatientApi } = useCreatePatient();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (!data) return;
    createPatientApi(data, {
      onSettled: () => {
        reset();
      },
    });
    //Every time a user is created call update startTime to cache user arrival time
    updateStartTime(new Date().getTime());
  };

  return (
    <div className="w-full px-8 py-8">
      <div className=" w-full h-full bg-white rounded-md p-10 flex flex-col justify-center items-center ">
        <div className="w-full flex items-start border-b border-slate-300 p-3 mb-10">
          <h3 className="text-xl font-normal">Add new patients</h3>
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
                {...register("firstName")}
                placeholder="Enter first name"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
            <Form title="Last name" placeholder="Enter last Name">
              <input
                type="text"
                {...register("lastName")}
                placeholder="Enter last name"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <div className="flex gap-4">
            <Form title="Purpose of visit">
              <select
                {...register("purpose")}
                className="w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none mx-2 text-gray-500 font-light "
              >
                <option value="other">Choose purpose of patient visit</option>
                <option value="wound-dressing">Wound dressing</option>
                <option value="consulting">Consulting</option>
              </select>
            </Form>
            <Form title="File Number">
              <input
                type="text"
                placeholder="Enter file number"
                {...register("fileNumber")}
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <div className="flex gap-4 ">
            <Form title="Phone number">
              <input
                type="text"
                {...register("phoneNumber")}
                placeholder="Enter a phone number"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
            <Form title="Wait Time">
              <input
                type="text"
                {...register("waitTime")}
                placeholder="Enter wait time ...30 or 40"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <Button>Add patient</Button>
        </form>
      </div>
    </div>
  );
};

export default NewPatient;
