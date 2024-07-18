import { useGetPatients } from "../hooks/useGetPatient";
import { MdDownload } from "react-icons/md";
import DisplayTablePat from "../components/DisplayTablePat";
import DisplayTableLab from "../components/DisplayTableLab";
import { useGetLabTest } from "../hooks/useGetLabTest";

const DisplayPatients = () => {
    const { patientsAll } = useGetPatients();
    const { labPatients } = useGetLabTest();

    return (
        <div className="w-screen h-screen flex  ">
            <DisplayTablePat
                patients={patientsAll}
                title="OutPatient "
                expand=""
                download={<MdDownload className="text-2xl" />}
            />

            <div className=" h-full w-[10px] bg-black"></div>

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
