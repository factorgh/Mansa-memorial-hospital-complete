import TableContent4 from "../components/TableContent4";
import { useGetPatients } from "../hooks/useGetPatient";
import { MdDownload } from "react-icons/md";

const DisplayPatients = () => {
  const { patientsAll } = useGetPatients();

  return (
    <div className="w-screen h-screen flex gap-5  p-3 bg-gray-700">
      <TableContent4
        patients={patientsAll}
        title="Consulting"
        expand=""
        download={<MdDownload className="text-2xl" />}
      />
      <TableContent4
        patients={patientsAll}
        title="Wound dressing"
        expand=""
        download={<MdDownload className="text-2xl" />}
      />
    </div>
  );
};

export default DisplayPatients;
