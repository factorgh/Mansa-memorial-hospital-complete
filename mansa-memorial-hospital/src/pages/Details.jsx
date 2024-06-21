import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TableContent2 from "../components/TableContent2";
import { patients } from "../services/data";
import { MdPersonAddAlt } from "react-icons/md";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto p-8">
      <TableContent2 patients={patients} title="Outpatients department" />
      <div className="w-full flex justify-between items-center  ">
        <h3 className="text-md font-light hover:cursor-pointer">
          Prev 1{" "}
          <span className="text-md font-light text-[#004F9E]"> 23.. Next</span>{" "}
        </h3>
        <Button icon={<MdPersonAddAlt />} onClick={() => navigate("/new")}>
          Add new account
        </Button>
      </div>
    </div>
  );
};

export default Details;
