import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const claimSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    claimAdded(state, action) {
      return { ...state, ...action.payload.data };
    },
    saveIncidentInfo(state, action) {
      return { ...state, step1: { ...action.payload.incidentData } };
    },
    saveServiceOptions(state, action) {
      return { ...state, step2: { ...action.payload } };
    },
    saveServiceFulfillment(state, action) {
      return { ...state, step3: { ...action.payload.data } };
    },
    saveProfile(state, action) {
      return { ...state, profile: { ...action.payload.data } };
    },
  },
});

export const {
  claimAdded,
  saveIncidentInfo,
  saveServiceOptions,
  saveServiceFulfillment,
  saveProfile,
} = claimSlice.actions;

export default claimSlice.reducer;
