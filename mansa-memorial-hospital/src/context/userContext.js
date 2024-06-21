// import { createContext, useContext, useState } from "react";
// import { useGetLabTest } from "../hooks/useGetLabTest";

// const LabContext = createContext();

// const LabProvider = (children) => {
//   const [labData, setLabData] = useState([]);

//   const { labPatients } = useGetLabTest();
//   setLabData(labPatients);

//   return <LabContext.Provider value={labData}>{children}</LabContext.Provider>;
// };

// function useLab() {
//   const context = useContext(LabProvider);
//   if (context === undefined) return;
//   return context;
// }

// export default { useLab };
