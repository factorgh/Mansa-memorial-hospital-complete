import { configureStore } from "@reduxjs/toolkit";
import labPatientsReducer from "../store/labPatientSlice";
import patientReducer from "../store/nursePatientSlice";

const store = configureStore({
  reducer: {
    labPatients: labPatientsReducer,
    patients: patientReducer,
  },
});

export default store;
