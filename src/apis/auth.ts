import { SignInCredentials, SignUpCredentials } from "@/types/authType";

export const authApi = {
  signUp: async (credentials: SignUpCredentials) => {
    const res = await fetch(`${process.env.API_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return res;
  },
  signIn: async (credentials: SignInCredentials) => {
    const res = await fetch(`${process.env.API_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return res.json();
  },
  signOut: async () => {
    const res = await fetch(`${process.env.API_URL}/sign-out`, {
      method: "POST",
    });
    return res.json();
  },
};
