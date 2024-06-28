import Form from "../components/Form";
import Button from "../components/Button";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetOnePatient } from "../hooks/useGetOnePatient";
import { useUpdatePatient } from "../hooks/useUpdatePatient";

const EditPage = () => {
  const { id } = useParams();
  const { patient } = useGetOnePatient(id);
  const { updatePatient } = useUpdatePatient(id);
  const { handleSubmit, reset, register } = useForm();
  console.log(patient);

  useEffect(
    function () {
      reset(patient);
    },
    [reset, patient]
  );
  const onSubmit = (data) => {
    console.log(data);
    updatePatient(data);
  };
  return (
    <div className="w-full px-8 py-8">
      <div className=" w-full h-full bg-white rounded-md p-10 flex flex-col justify-center items-center ">
        <div className="w-full flex items-start border-b border-slate-300 p-3 mb-10">
          <h3 className="text-xl font-normal">Edit patient details</h3>
        </div>

        <form
          action=""
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <Form title="First name ">
              <input
                disabled
                type="text"
                {...register("firstName", { required: true })}
                placeholder="Enter first name"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
            <Form title="Last name" placeholder="Enter last Name">
              <input
                disabled
                type="text"
                {...register("lastName", { required: true })}
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
                <option value="outreach">Outreach</option>
                <option value="anti-natal">Anti Natal</option>
              </select>
            </Form>
            <Form title="File Number">
              <input
                disabled
                {...register("fileNumber", { required: true })}
                type="text"
                placeholder="Enter file number"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <div className="flex gap-4 w-[500px] ml-2">
            <Form title="Phone number">
              <input
                disabled
                {...register("phoneNumber", { required: true })}
                type="text"
                placeholder="Enter a phone number"
                className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </Form>
          </div>
          <Button>Update</Button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
