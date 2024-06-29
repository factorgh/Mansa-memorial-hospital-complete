/* eslint-disable react/prop-types */

import AlertDialog from "./AlertDialogSlide";

import { useDelLabTest } from "../hooks/useDelLabTest";
import EditDialog from "../components/EditTestDialog";

function TableContent({ hospitalTest }) {
  const { delLabTestApi } = useDelLabTest();
  const handleDel = (id) => {
    delLabTestApi(id);
  };

  return (
    <div className="bg-white pt-3 pb-4 mt-5 rounded-md flex-1">
      <strong className="text-gray-700 font-medium flex justify-between p-2">
        <h3 className="px-3 font-light">All Tests</h3>{" "}
      </strong>
      <div className=" rounded-sm mt-3">
        <table className="w-full text-gray-700 overflow-scroll">
          <thead className="bg-gray-200  ">
            <tr className="w-full">
              <td className="p-3 text-[#004F9E]">#</td>
              <td className="p-3 text-[#004F9E]">Name</td>
              <td className="p-3 text-[#004F9E]">Duration</td>

              <td className="p-3 text-[#004F9E]">Actions</td>
            </tr>
          </thead>
          <tbody>
            {hospitalTest?.map((test, index) => (
              <tr key={test._id} className="p-3  border-b border-gray-200">
                <td className="p-3 ">{index + 1}</td>
                <td className="p-3 flex gap-2">{test.name}</td>

                <td className="p-3 text-[#004F9E]">{test.time}</td>
                <td className="p-3 ">
                  <span className="flex gap-2">
                    <EditDialog id={test._id} />
                    <AlertDialog onClick={() => handleDel(test._id)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableContent;
