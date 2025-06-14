import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
