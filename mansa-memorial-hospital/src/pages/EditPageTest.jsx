import { useEffect } from "react";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useGetOneTest } from "../hooks/useGetOneTest";
import { useUpdateLab } from "../hooks/useUpdateTest";

const EditPageTest = () => {
  const { id } = useParams();

  const { labPatient } = useGetOneTest(id);
  const { updateLabTest } = useUpdateLab(id);

  const { handleSubmit, reset, register } = useForm();

  useEffect(
    function () {
      reset(labPatient);
    },
    [reset, labPatient]
  );
  const onSubmit = (data) => {
    if (
      data.patient === "" ||
      data.testName === "other" ||
      data.fileNumber === 0
    ) {
      return;
    }

    updateLabTest(data);
  };
  return (
    <div className="flex justify-center items-center p-5 bg-white rounded-md m-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="POST"
        className="flex flex-col gap-3 w-full justify-center items-center "
      >
        <Form title="Patient name">
          <input
            type="text"
            {...register("patient")}
            placeholder="Enter patient name"
            className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </Form>
        <Form title="File Number">
          <input
            type="text"
            {...register("fileNumber")}
            placeholder="Enter file Number"
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
        <div className="flex flex-col gap-2 w-full  pl-5  justify-center items-start">
          <h3 className="text-md font-light text-gray-500">
            Select a lab test
          </h3>
          <label
            htmlFor=""
            className="w-full flex border border-slate-400 shadow-sm rounded-md bg-white mb-5 p-3 focus:border focus:border-slate-700 "
          >
            <select
              {...register("testName")}
              className="text-gray-500 w-full focus:outline-none font-light"
            >
              <option value="other">Select lab test type</option>
              <option value="sugar analysis">Sugar analysis</option>
              <option value="fpc">FPC</option>
              <option value="vitemsin D">Vitamins D</option>
              <option value="Complete blood count">FPC</option>
            </select>
          </label>
        </div>
        <Button>Update</Button>
      </form>
    </div>
  );
};

export default EditPageTest;
