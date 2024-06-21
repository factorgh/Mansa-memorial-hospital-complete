import { RiFileCloseLine } from "react-icons/ri";
import { GrTest } from "react-icons/gr";
import Button from "../components/Button";

const LabTests = () => {
  return (
    <div className="w-full h-full flex justify-center items-center  ">
      <div className="flex flex-col justify-center items-center text-md">
        <RiFileCloseLine className="w-[200px] h-[200px] cursor-pointer font-thin text-gray-300 mb-5 " />
        <p>No lab tests created yet.Create one</p>
        <p>by clicking the button below</p>

        <Button icon={<GrTest />}>New lab tests</Button>
      </div>
    </div>
  );
};

export default LabTests;
