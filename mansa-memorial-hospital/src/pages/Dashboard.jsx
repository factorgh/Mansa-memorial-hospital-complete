import ChartItem from "../components/ChartItem";
import ChartItem2 from "../components/ChartItem2";
import TableContent from "../components/TableContent";
import { saveAs } from "file-saver";

import { GrTest } from "react-icons/gr";
import TableContent2 from "../components/TableContent2";
import TableContent4 from "../components/TableContent4";
import Pie2 from "../components/Pie2";
import { MdDownload, MdPersonAddAlt } from "react-icons/md";

// import AlertDialogSlide from "../components/FormDialog";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import FormDialog from "../components/FormDialog";
import { useEffect, useState } from "react";
import { getAllPatient, updatePatientStatus } from "../services/api_db";
import { getAllTest } from "../services/api_db";
import { useGetLabTest } from "../hooks/useGetLabTest";

const Dashboard = () => {
    const [labData, setLabPatients] = useState();
    const [patients, setAllPatients] = useState();
    const { labPatients } = useGetLabTest();

    useEffect(function () {
        async function fetchPatients() {
            const data = await getAllTest();

            setLabPatients(data);
        }

        fetchPatients();
    }, []);

    useEffect(function () {
        async function fetchLab() {
            const data = await getAllPatient();
            setAllPatients(data);
        }

        fetchLab();
    }, []);
    useEffect(function () {
        setLabPatients(labPatients);
    }, []);
    // Hanlde add lab test
    const totalCount = labData?.reduce((acc) => {
        return acc + 1;
    }, 0);

    const getUser = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const isGeneralRole = getUser?.role === "admin" || getUser?.role === "manager";
    const isAdmin = getUser?.role === "admin";
    const isNurse = getUser?.role === "nurse";
    const isLabTech = getUser?.role === "lab-tech";

    const handleClick = () => {
        navigate("/new");
    };

    const handleStatusChange = async (id, status) => {
        console.log(id, status);
        await updatePatientStatus(id, status);
        labData.map((patient) => (patient._id === id ? { ...patient, status } : patient));

        /// Remove patient from queue when status is set to completed
        setLabPatients((prevState) =>
            prevState.filter((patient) => patient.status !== "completed")
        );

        await fetch(`http://localhost:5000/api/v1/tests/status/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
    };

    ///Hnadle Data download  feature

    const handleDownload = async () => {
        try {
            ///FetchData  for cv download
            const data = await fetch("http://localhost:5000/api/v1/patients/download");
            const jsonData = await data.json();

            // Convert JSON to CSV
            const csvData = convertJSONToCSV(jsonData);

            // Save CSV file
            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
            saveAs(blob, "queue-report.csv");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDownloadLabTest = async () => {
        try {
            ///FetchData  for cv download
            const data = await fetch("http://localhost:5000/api/v1/tests/download");
            const jsonData = await data.json();

            // Convert JSON to CSV
            const csvData = convertJSONToCSV(jsonData);

            // Save CSV file
            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
            saveAs(blob, "queue-report.csv");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    ///CONVERT JSON TO CSV FUNCTION
    const convertJSONToCSV = (jsonData) => {
        const csvRows = [];
        const headers = Object.keys(jsonData[0]);
        csvRows.push(headers.join(","));

        for (const data of jsonData) {
            const values = headers.map((header) => data[header]);
            csvRows.push(values.join(","));
        }

        return csvRows.join("\n");
    };

    const filteredLabData = labData?.filter((patients) => patients.status !== "completed");
    const filteredPatientsData = patients?.filter((patients) => patients.status !== "completed");

    return (
        <div className=" flex flex-col overflow-scroll">
            {isGeneralRole && (
                <div className="flex gap-5 w-full px-10 pt-5 ">
                    <ChartItem waitTimes />
                    <ChartItem2 />
                    {/* <div className="w-[500px] bg-white">
          <BarChartConfig />
        </div> */}

                    <div className="w-96 h-[300px] flex flex-col gap-5 ">
                        {/* Chart display PIE */}
                        <div className="w-full bg-white flex-1 rounded-md  shadow-sm">
                            <Pie2 />
                        </div>
                        <div className="w-full bg-white rounded-md flex-1 flex  flex-col py-2 px-5 gap-5 shadow-sm justify-end">
                            <div className="bg-[#004F9E] w-10 h-10 text-white flex  flex-col justify-center items-center rounded-full">
                                <GrTest className="text-white" />
                            </div>
                            <h3 className="text-[12px] flex items-center gap-2">
                                <span className=" text-4xl">{totalCount}</span> Patients have
                                visited the lab
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {!isGeneralRole && (
                <div className="w-full flex justify-end px-10 py-5 ">
                    {!isNurse ? (
                        <FormDialog icon={<MdPersonAddAlt />} title="Add Lab patient" />
                    ) : (
                        <Button icon={<MdPersonAddAlt />} onClick={handleClick}>
                            Add patient
                        </Button>
                    )}
                </div>
            )}

            {isAdmin && (
                <div className="w-full flex justify-between px-20 py-5 ">
                    <Button icon={<MdPersonAddAlt />} onClick={handleClick}>
                        Add patient
                    </Button>
                    <FormDialog icon={<MdPersonAddAlt />} title="Add  Lab patient" />
                </div>
            )}

            <div className="flex gap-8 w-full px-10">
                {isGeneralRole ? (
                    <>
                        <TableContent4
                            elapsedTime={0}
                            patients={filteredPatientsData}
                            title="Outpatient department"
                            download={<MdDownload onClick={handleDownload} className="text-2xl" />}
                        />
                        <TableContent
                            patients={filteredLabData}
                            title="Awaiting lab results"
                            download={
                                <MdDownload onClick={handleDownloadLabTest} className="text-2xl" />
                            }
                        />
                    </>
                ) : (
                    <TableContent2
                        elapsedTime={0}
                        handleStatusChange={handleStatusChange}
                        patients={isLabTech ? filteredLabData : filteredPatientsData}
                        status="status"
                        title={isLabTech ? "Awaiting lab test results" : "Outpatient department"}
                        header={isLabTech ? "Laboratory test" : "Purpose"}
                    />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
