/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

function TableContent({ title, labPatients, expand }) {
  const navigate = useNavigate();
  // handle del and handle edit

  const handleDisplay = () => {
    navigate("/patient-display");
  };

  return (
    <div className="bg-white pt-3 pb-4 mt-5 rounded-md flex-1 border border-slate-950">
      <strong className="text-gray-700 font-medium flex justify-between p-2">
        <h3 className="px-3 font-light">{title}</h3>{" "}
        <div className="flex gap-15">
          <h3
            className="px-3 text-[#004F9E] font-light hover:cursor-pointer "
            onClick={handleDisplay}
          >
            {expand}
          </h3>
        </div>
      </strong>
      <div className=" rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead className="bg-gray-200  ">
            <tr className="w-full">
              <td className="p-3 text-[#004F9E]">#</td>
              <td className="p-3 text-[#004F9E]">Name</td>
              <td className="p-3 text-[#004F9E]">Time Remaining</td>
            </tr>
          </thead>
          <tbody>
            {labPatients?.map((patient, index) => (
              <tr key={patient._id} className="p-3  border-b border-gray-200">
                <td className="p-3 ">{index + 1}</td>
                <td className="p-3 ">{patient.patient}</td>
                <td className="p-3 ">12:30:36</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableContent;
