import { useGetPatients } from "../hooks/useGetPatient";
import { MdDownload } from "react-icons/md";
import DisplayTablePat from "../components/DisplayTablePat";
import DisplayTableLab from "../components/DisplayTableLab";
import { useGetLabTest } from "../hooks/useGetLabTest";

const DisplayPatients = () => {
  const { patientsAll } = useGetPatients();
  const { labPatients } = useGetLabTest();

  return (
    <div className="w-screen h-screen flex   p-3 bg-gray-700">
      <DisplayTablePat
        patients={patientsAll}
        title="OutPatient Department"
        expand=""
        download={<MdDownload className="text-2xl" />}
      />
      <DisplayTableLab
        labPatients={labPatients}
        title="Lab Patients"
        expand=""
        download={<MdDownload className="text-2xl" />}
      />
    </div>
  );
};

export default DisplayPatients;
