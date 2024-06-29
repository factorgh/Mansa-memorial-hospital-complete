import { RiFileCloseLine } from "react-icons/ri";
import AddTestDialog from "../components/AddTestDialog";
import { useGetAllHospitalTest } from "../hooks/useGetAllHospitalTest";
import HospitalTestTable from "../components/HospitalTestTable";

const LabTests = () => {
  const { hospitalTest } = useGetAllHospitalTest();
  console.log(hospitalTest);
  return (
    <>
      {hospitalTest ? (
        <div className="w-full h-auto px-12  flex flex-col gap-8">
          <div className="flex items-center justify-end ">
            <AddTestDialog />
          </div>
          <HospitalTestTable hospitalTest={hospitalTest} />
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center  ">
          <div className="flex flex-col justify-center items-center text-md">
            <RiFileCloseLine className="w-[200px] h-[200px] cursor-pointer font-thin text-gray-300 mb-5 " />
            <p>No lab tests created yet.Create one</p>
            <p>by clicking the button below</p>
            <AddTestDialog />
          </div>
        </div>
      )}
    </>
  );
};

export default LabTests;
