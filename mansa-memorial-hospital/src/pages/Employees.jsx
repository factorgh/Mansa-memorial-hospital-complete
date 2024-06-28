import { Link } from "react-router-dom";
import TableContent3 from "../components/TableContent3";
import { useGetUsers } from "../hooks/useGetUser";

const Employees = () => {
  const { users, isSuccess } = useGetUsers();
  ////Filter employees only
  let employees;

  if (isSuccess) {
    employees = users.filter(
      (user) => user.role !== "admin" && user.role !== "manager"
    );
  }

  return (
    <div className="w-full h-auto px-12 py-5 flex flex-col gap-8">
      <div className="flex items-center justify-end ">
        <Link to="/account">
          <button className="bg-[#004F9E] p-2 shadow-sm  text-white w-[200px] rounded-md">
            Add New Account
          </button>
        </Link>
      </div>

      <TableContent3
        patients={employees}
        title="Employees"
        status="Patients treated"
      />
    </div>
  );
};

export default Employees;
