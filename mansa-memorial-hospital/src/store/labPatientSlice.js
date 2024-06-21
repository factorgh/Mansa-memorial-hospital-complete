import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labPatients: [],
};

const labPatientsSlice = createSlice({
  name: "labPatients",
  initialState,
  reducers: {
    setLabData(state, action) {
      state.labPatients = action.payload;
    },
    addLabPatient(state, action) {
      state.labPatients = state.labPatients.push(action.payload);
    },
    updateLabPatientStatus: (state, action) => {
      const { id, status } = action.payload;
      const patientIndex = state.labPatients.findIndex(
        (patient) => patient.id === id
      );
      if (patientIndex !== -1) {
        state.labPatients[patientIndex].status = status;
      }
    },
    deleteCompletedLabPatients: (state) => {
      state.patients = state.patients.filter(
        (patient) => patient.status !== "completed"
      );
    },
  },
});

export const {
  addLabPatient,
  setLabData,
  updateLabPatientStatus,
  deleteCompletedLabPatients,
} = labPatientsSlice.actions;
export default labPatientsSlice.reducer;
