/* eslint-disable react/prop-types */

// import { FaEdit } from "react-icons/fa";

// import AlertDialog from "./AlertDialogSlide";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
// import { useDelLabTest } from "../hooks/useDelLabTest";
// import { useDelPatient } from "../hooks/useDelPatient";
// import { Link } from "react-router-dom";

function TableContent({ title, patients, expand, header, handleStatusChange }) {
    const navigate = useNavigate();
    // handle del and handle edit
    const handleDisplay = () => {
        navigate("/display");
    };

    // const { delLabTestApi } = useDelLabTest();
    // const { delPatientApi } = useDelPatient();
    // const handleDel = (id) => {
    //   delLabTestApi(id);
    // };

    // const handleDeletePatient = (id) => {
    //   delPatientApi(id);
    // };
    const getUser = JSON.parse(localStorage.getItem("user"));
    const isLabTech = getUser?.role === "lab-tech";
    // const isAdmin = getUser?.role === "admin";

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
                            <td className="p-3 text-[#004F9E]">Patient name</td>
                            <td className="p-3 text-[#004F9E]">{header}</td>
                            {isLabTech && <td className="p-3 text-[#004F9E]">CountDown</td>}

                            <td className="p-3 text-[#004F9E]">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {patients?.map((patient, index) => (
                            <tr key={patient._id} className="p-3  border-b border-gray-200">
                                <td className="p-3 ">{index + 1}</td>
                                <td className="p-3 ">
                                    {isLabTech
                                        ? patient.patient
                                        : patient.firstName + patient.lastName}
                                </td>

                                <td className="p-3 text-[#004F9E]">
                                    {isLabTech ? patient.testName : patient.purpose}
                                </td>
                                {isLabTech && (
                                    <td className="p-3 text-[#004F9E]">
                                        <CountdownTimer />
                                    </td>
                                )}

                                {index === 0 && (
                                    <td className="p-3 ">
                                        <button
                                            onClick={() =>
                                                handleStatusChange(patient._id, "completed")
                                            }
                                            className="text-white p-2 rounded-md text-sm bg-[#004F9E] "
                                        >
                                            Complete
                                        </button>
                                    </td>
                                )}

                                {/* <span className="flex gap-2">
                    {isLabTech ? (
                      <Link to={`/edit/test/${patient._id}`}>
                        <FaEdit className="hover:cursor-pointer" />
                      </Link>
                    ) : (
                      <Link to={`/edit/${patient._id}`}>
                        <FaEdit className="hover:cursor-pointer" />
                      </Link>
                    )}

                    {isAdmin && (
                      <AlertDialog
                        onClick={() =>
                          isLabTech
                            ? handleDel(patient._id)
                            : handleDeletePatient(patient._id)
                        }
                      />
                    )}
                  </span> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableContent;
