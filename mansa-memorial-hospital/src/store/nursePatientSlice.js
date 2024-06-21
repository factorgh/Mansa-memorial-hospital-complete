import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [],
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatientData(state, action) {
      state.patients = action.payload;
    },
    addPatient(state, action) {
      state.patients = state.patients.push(action.payload);
    },
    updatePatientStatus: (state, action) => {
      const { id, status } = action.payload;
      const patientIndex = state.patients.findIndex(
        (patient) => patient.id === id
      );
      if (patientIndex !== -1) {
        state.patients[patientIndex].status = status;
      }
    },
    deleteCompletedPatients: (state) => {
      state.patients = state.patients.filter(
        (patient) => patient.status !== "completed"
      );
    },
  },
});

export const {
  addPatient,
  updatePatientStatus,
  deleteCompletedPatients,
  setPatientData,
} = patientsSlice.actions;
export default patientsSlice.reducer;
