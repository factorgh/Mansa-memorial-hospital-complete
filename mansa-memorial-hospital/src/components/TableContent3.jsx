/* eslint-disable react/prop-types */

import { FaEdit } from "react-icons/fa";

import AlertDialog from "./AlertDialogSlide";
import { useNavigate } from "react-router-dom";
import { useDelLabTest } from "../hooks/useDelLabTest";

function TableContent({ title, patients, expand }) {
  const navigate = useNavigate();
  // handle del and handle edit
  const handleDisplay = () => {
    window.location.href = "display";
  };

  const { delLabTestApi } = useDelLabTest();
  const handleDel = (id) => {
    delLabTestApi(id);
  };

  return (
    <div className="bg-white pt-3 pb-4 mt-5 rounded-md flex-1">
      <strong className="text-gray-700 font-medium flex justify-between p-2">
        <h3 className="px-3 font-light">{title}</h3>{" "}
        <h3
          className="px-3 text-[#004F9E] font-light hover:cursor-pointer "
          onClick={handleDisplay}
        >
          {expand}
        </h3>
      </strong>
      <div className=" rounded-sm mt-3">
        <table className="w-full text-gray-700 overflow-scroll">
          <thead className="bg-gray-200  ">
            <tr className="w-full">
              <td className="p-3 text-[#004F9E]">#</td>
              <td className="p-3 text-[#004F9E]">Name</td>
              <td className="p-3 text-[#004F9E]">Patients Treated</td>

              <td className="p-3 text-[#004F9E]">Actions</td>
            </tr>
          </thead>
          <tbody>
            {patients?.map((patient, index) => (
              <tr key={patient._id} className="p-3  border-b border-gray-200">
                <td className="p-3 ">{index + 1}</td>
                <td className="p-3 flex gap-2">
                  {patient.firstName} {patient.lastName}
                </td>

                <td className="p-3 text-[#004F9E]">{patient.purpose}</td>
                <td className="p-3 ">
                  <span className="flex gap-2">
                    <FaEdit
                      className="hover:cursor-pointer"
                      onClick={() => navigate(`/edit/user/${patient._id}`)}
                    />
                    <AlertDialog onClick={() => handleDel(patient._id)} />
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
