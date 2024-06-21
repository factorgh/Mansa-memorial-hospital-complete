import TableContent2 from "../components/TableContent2";
import TableContent from "../components/TableContent";
import TableContent4 from "../components/TableContent4";

import { MdDownload } from "react-icons/md";
import { useGetLabTest } from "../hooks/useGetLabTest";
import { useGetPatients } from "../hooks/useGetPatient";
import { useState, useEffect } from "react";

const Patients = () => {
  const [labData, setLabPatients] = useState([]);
  const [patients, setPatients] = useState([]);
  const getUser = JSON.parse(localStorage.getItem("user"));
  const isLabTech = getUser?.role === "lab-tech";
  const { labPatients } = useGetLabTest();
  const { patientsAll } = useGetPatients();
  const isGeneralRole =
    getUser?.role === "admin" || getUser?.role === "manager";

  //Get lab patients on initial render
  useEffect(
    function () {
      if (labPatients) {
        setLabPatients(labPatients);
        setPatients(patientsAll);
      }
    },
    [setLabPatients, labPatients, patientsAll]
  );
  ///HNADLE STATUS CHANGE
  const handleLabStatusChange = async (id, status) => {
    ///Using optimistic updating,update UI before perform side effects
    labData.map((patient) =>
      patient._id === id ? { ...patient, status } : patient
    );

    ///update the state of the patients in the array
    setLabPatients((patients) =>
      patients.filter((patient) => patient.status !== "completed")
    );

    console.log(id, status);
    await fetch(`http://localhost:5000/api/v1/tests/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    //Update local state to reflect changes as well
  };
  const handlePatientStatusChange = async (id, status) => {
    console.log(id, status);

    //Applying optimistic updating , by updating UI before running the side effects
    patients.map((patient) =>
      patient._id === id ? { ...patient, status } : patient
    );

    ///update the state of the patients in the array
    setPatients((patients) =>
      patients.filter((patient) => patient.status !== "completed")
    );

    await fetch(`http://localhost:5000/api/v1/patients/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  ///Handle filtered results
  const filteredLabData = labPatients?.filter(
    (patient) => patient.status !== "completed"
  );
  const filteredPatientData = patientsAll?.filter(
    (patient) => patient.status !== "completed"
  );
  return (
    <div className="w-full h-auto px-12 py-5 flex gap-8">
      {isGeneralRole ? (
        <>
          <TableContent4
            patients={filteredPatientData}
            title="Outpatient department"
            expand="see all"
            download={<MdDownload className="text-2xl" />}
          />
          <TableContent
            patients={filteredLabData}
            title="Awaiting lab results"
            expand="see all"
            download={<MdDownload className="text-2xl" />}
          />
        </>
      ) : (
        <>
          <TableContent2
            handleStatusChange={
              isLabTech ? handleLabStatusChange : handlePatientStatusChange
            }
            patients={isLabTech ? filteredLabData : filteredPatientData}
            title={
              isLabTech ? "Awaiting lab test results" : "Outpatient department"
            }
          />
        </>
      )}
    </div>
  );
};

export default Patients;
