/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { Stopwatch } from "stopwatch-dev";

function TableContent({ title, patients, expand }) {
    const navigate = useNavigate();
    const stopwatch = new Stopwatch();
    // handle del and handle edit

    const handleDisplay = () => {
        navigate("/patient-display");
    };

    const getUser = JSON.parse(localStorage.getItem("user"));
    const isGeneralRole = getUser?.role === "admin" || getUser?.role === "manager";

    /////Handle delete Patient

    return (
        <div className="bg-white    rounded-md flex-1 border">
            <div className="bg-[#004F9E]">
                <strong className="text-gray-700 font-medium flex justify-between p-2">
                    <h3 className="px-3 font-black text-[40px] text-white">{title}</h3>{" "}
                    <div className="flex gap-15">
                        <h3
                            className="px-3 text-[#004F9E] font-light hover:cursor-pointer "
                            onClick={handleDisplay}
                        >
                            {expand}
                        </h3>
                    </div>
                </strong>
            </div>
            <div className=" rounded-sm ">
                <table className="w-full text-gray-700">
                    <thead className="bg-[#004F9E]  text-white">
                        <tr className="w-full">
                            <td className="p-3 ">#</td>
                            <td className="p-3 ">Name </td>

                            {isGeneralRole && <td className="p-3">Time Spent</td>}
                        </tr>
                    </thead>
                    <tbody>
                        {patients?.map((patient, index) => {
                            let bg = "bg-[#000000]";
                            let ab = "CH";

                            if (patient.purpose === "antenatal") {
                                bg = "bg-red-500";
                                ab = "MD";
                            } else if (patient.purpose === "wound-dressing") {
                                bg = "bg-yellow-500";
                                ab = "WD";
                            } else if (patient.purpose === "consulting") {
                                bg = "bg-green-500";
                                ab = "CN";
                            }

                            const fullName = patient.firstName + " " + patient.lastName;
                            return (
                                <tr key={patient._id} className="p-3 border-b border-gray-200">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">
                                        <span
                                            className={`${bg} h-full w-[50px] p-1 text-white rounded-full text-[10px]`}
                                        >
                                            {ab}
                                        </span>
                                        <p className=" inline  text-[20px] ml-4 font-medium">
                                            {fullName}
                                        </p>
                                    </td>
                                    <td className="p-3">00:00:00</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

//  FF950C   B02FF7

export default TableContent;
