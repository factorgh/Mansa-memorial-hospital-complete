import TableContent3 from "../components/TableContent3";
import { useGetUsers } from "../hooks/useGetUser";

const Employees = () => {
  const { users, isSuccess } = useGetUsers();

  let nurseUsers;
  let labTechUsers;
  if (isSuccess) {
    nurseUsers = users?.filter((user) => user.role === "nurse");
    labTechUsers = users?.filter((user) => user.role === "lab-tech");
  }

  return (
    <div className="w-full h-auto px-12 py-5 flex gap-8">
      <TableContent3
        patients={nurseUsers}
        title="Nurses"
        status="Patients treated"
      />
      <TableContent3
        patients={labTechUsers}
        title="Lab technician"
        status="Patients treated"
      />
    </div>
  );
};

export default Employees;
