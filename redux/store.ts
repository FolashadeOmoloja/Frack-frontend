import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import talentRegistrationSlice from "./slices/talentRegistrationSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    talentRegistration: talentRegistrationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
