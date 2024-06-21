import { MdDownload } from "react-icons/md";
import TableContent from "../components/TableContent";

import { useGetLabTest } from "../hooks/useGetLabTest";
import { useEffect, useState } from "react";

const DisplayPage = () => {
  const [labData, setLabData] = useState([]);
  const { labPatients } = useGetLabTest();

  useEffect(
    function () {
      if (labPatients) setLabData(labPatients);
    },
    [labPatients]
  );
  const filteredData = labData?.filter(
    (patient) => patient?.status !== "completed"
  );

  return (
    <div className="w-screen h-screen flex gap-5  p-3 bg-gray-700">
      <>
        <TableContent
          patients={filteredData}
          title="Awaiting lab results"
          download={<MdDownload className="text-2xl" />}
        />
      </>
    </div>
  );
};

export default DisplayPage;
