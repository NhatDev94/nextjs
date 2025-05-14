import { authApi } from "@/apis/auth";
import { SignInCredentials, SignUpCredentials } from "@/types/authType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type User = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isAdmin: boolean;
};

type AuthState = {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signIn } = AuthSlice.actions;
export default AuthSlice;
