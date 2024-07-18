/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

import Countdown from "react-countdown";

function TableContent({ title, labPatients, expand }) {
    const navigate = useNavigate();
    // handle del and handle edit

    const handleDisplay = () => {
        navigate("/patient-display");
    };

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span>
                    {hours}:{minutes}:{seconds}
                </span>
            );
        }
    };

    return (
        <div className="bg-white  rounded-md flex-1 border">
            <strong className="bg-[#e57a3b] font-medium flex justify-between p-2">
                <h3 className="px-3   text-white  font-black text-[40px]">{title}</h3>{" "}
                <div className="flex gap-15">
                    <h3
                        className="px-3 text-[#004F9E] font-light hover:cursor-pointer "
                        onClick={handleDisplay}
                    >
                        {expand}
                    </h3>
                </div>
            </strong>
            <div className=" rounded-sm">
                <table className="w-full">
                    <thead className="bg-[#e57a3b]  text-white  ">
                        <tr className="w-full">
                            <td className="p-3 ">#</td>
                            <td className="p-3 ">Name</td>
                            <td className="p-3 ">Time Remaining</td>
                        </tr>
                    </thead>
                    <tbody>
                        {labPatients?.map((patient, index) => {
                            let name = patient?.patient;

                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <tr key={patient._id} className="p-3  border-b border-gray-200">
                                    <td className="p-3 ">{index + 1}</td>
                                    <td className="p-3  text-[20px]">{name}</td>
                                    <td className="p-3 ">
                                        <Countdown
                                            date={Date.now() + 10000000}
                                            renderer={renderer}
                                        />
                                        ,
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableContent;
