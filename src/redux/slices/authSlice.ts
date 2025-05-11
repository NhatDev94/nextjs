import { authApi } from "@/apis/auth";
import { SignInCredentials, SignUpCredentials } from "@/types/authType";
import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

type User = {
  email: string;
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

const signUp = createAsyncThunk(
  "auth/signUp",
  async (signInCredentials: SignUpCredentials) => {
    const res = await authApi.signUp(signInCredentials);
    return res;
  }
);

const signIn = createAsyncThunk(
  "auth/signIn",
  async (signInCredentials: SignInCredentials) => {
    const res = await authApi.signIn(signInCredentials);
    return res.user;
  }
);

const signOut = createAsyncThunk("auth/signOut", async () => {
  const res = await authApi.signOut();
  return { user: null, token: null };
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // sign up
    builder.addCase(signUp.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = "succeeded";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = "failed";
    });

    // sign in
    builder.addCase(signIn.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = "failed";
    });

    // sign out
    builder.addCase(signOut.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = null;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export { signUp, signIn, signOut };
export default AuthSlice;
