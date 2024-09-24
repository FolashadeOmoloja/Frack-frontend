// talentRegistrationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1Data: {},
  step2Data: {},
  step3Data: {},
  step4Data: {},
};

const talentRegistrationSlice = createSlice({
  name: "talentRegistration",
  initialState,
  reducers: {
    setStep1Data(state, action) {
      state.step1Data = action.payload;
    },
    setStep2Data(state, action) {
      state.step2Data = action.payload;
    },
    setStep3Data(state, action) {
      state.step3Data = action.payload;
    },
    setStep4Data(state, action) {
      state.step4Data = action.payload;
    },
  },
});

export const { setStep1Data, setStep2Data, setStep3Data, setStep4Data } =
  talentRegistrationSlice.actions;

export default talentRegistrationSlice.reducer;
