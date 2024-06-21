import { TbWheelchair } from "react-icons/tb";
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import TableContent from "../components/TableContent";
import { patients } from "../services/data";

const Dashboard = () => {
  return (
    <>
      <div className="px-10 py-5">
        <div className="w-full flex gap-8">
          <div className="bg-white w-[250px] h-[200px] rounded-md p-3 flex flex-col justify-center items-start shadow-sm ">
            <div className="w-10 h-10 bg-[#004F9E] rounded-full flex items-center  justify-center text-white hover:cursor-pointer ml-2 ">
              <TbWheelchair className="text-white" />
            </div>
            <p className="text-sm font-light p-2 mt-5 ">Number of patients</p>
            <p className="text-3xl p-2 font-normal">230</p>
          </div>
          <div className="bg-white w-[250px] h-[200px] rounded-md p-3 flex flex-col justify-center items-start shadow-sm ">
            <div className="w-10 h-10 bg-[#F78509] rounded-full flex items-center  justify-center text-white hover:cursor-pointer ml-2 ">
              <FaUserNurse className="text-white" />
            </div>
            <p className="text-sm font-light p-2 mt-5 ">Number of nurses</p>
            <p className="text-3xl p-2 font-normal">43</p>
          </div>
          <div className="bg-white w-[250px] h-[200px] rounded-md p-3 flex flex-col justify-center items-start shadow-sm ">
            <div className="w-10 h-10 bg-[#004F9E] rounded-full flex items-center  justify-center text-white hover:cursor-pointer ml-2 ">
              <FaUserDoctor className="text-white" />
            </div>
            <p className="text-sm font-light p-2 mt-5 ">
              Number of lab technicians
            </p>
            <p className="text-3xl p-2 font-normal">30</p>
          </div>
          <div className="bg-white w-[250px] h-[200px] rounded-md p-3 flex flex-col justify-center items-start shadow-sm ">
            <div className="w-10 h-10 bg-[#F78509] rounded-full flex items-center  justify-center text-white hover:cursor-pointer ml-2 ">
              <GrTest className="text-white" />
            </div>
            <p className="text-sm font-light p-2 mt-5 ">Lab tests performed</p>
            <p className="text-3xl p-2 font-normal">370</p>
          </div>
        </div>
        <div className="flex gap-8">
          <TableContent
            patients={patients}
            title="Outpatient department"
            expand="see all"
          />
          <TableContent
            patients={patients}
            title="Awaiting lab results"
            expand="see all"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
