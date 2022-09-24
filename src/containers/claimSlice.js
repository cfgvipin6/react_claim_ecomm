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
      return { ...state, ...action.payload.data };
    },
    saveServiceOptions(state, action) {
      return { ...state, ...action.payload.data };
    },
    saveServiceFulfillment(state, action) {
      return { ...state, ...action.payload.data };
    },
  },
});

export const {
  claimAdded,
  saveIncidentInfo,
  saveServiceOptions,
  saveServiceFulfillment,
} = claimSlice.actions;

export default claimSlice.reducer;
