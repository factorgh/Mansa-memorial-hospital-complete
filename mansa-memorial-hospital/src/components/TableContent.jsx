/* eslint-disable react/prop-types */

import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./AlertDialogSlide";
function TableContent({ title, patients, expand, download }) {
  const navigate = useNavigate();
  // handle del and handle edit

  const handleDisplay = () => {
    navigate("/display");
  };
  // function convertMinutesToTime(minutes) {
  //   const hours = Math.floor(minutes / 60);
  //   const remainingMinutes = minutes % 60;

  //   // Pad single-digit minutes with a leading zero
  //   const paddedMinutes =
  //     remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;

  //   return hours + ":" + paddedMinutes;
  // }
  const getUser = JSON.parse(localStorage.getItem("user"));
  const isGeneralRole =
    getUser?.role === "admin" || getUser?.role === "manager";

  return (
    <div className="bg-white pt-3 pb-4 mt-5 rounded-md flex-1">
      <strong className="text-gray-700 font-medium flex justify-between p-2">
        <h3 className="px-3 font-light">{title}</h3>{" "}
        <div className="flex gap-15">
          {download && (
            <h3 className="px-3 text-[#004F9E] font-light hover:cursor-pointer">
              {download}
            </h3>
          )}
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
              <td className="p-3 ">status</td>
              {isGeneralRole && <td className="p-3 text-[#004F9E]">Actions</td>}
            </tr>
          </thead>
          <tbody>
            {patients?.map((patient, index) => (
              <tr key={patient._id} className="p-3  border-b border-gray-200">
                <td className="p-3 ">{index + 1}</td>
                <td className="p-3 ">{patient.patient}</td>

                <td>{patient.status}</td>

                {isGeneralRole && (
                  <td className="p-3 ">
                    <span className="flex gap-2">
                      <FaEdit
                        className="hover:cursor-pointer"
                        onClick={() => navigate(`/edit/test/${patient._id}`)}
                      />
                      <AlertDialog />
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableContent;
