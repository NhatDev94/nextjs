import { app } from "@/lib/firebase/indext";
import { signIn } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";

export default function useGoogleSignIn() {
  const dispatch = useDispatch<AppDispatch>();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user) {
          dispatch(
            signIn({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              isAdmin: user.uid === "LmBtHD36HrUJxuljdTXblfDTm7g1",
            })
          );
        }

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

  return {
    handleGoogleSignIn,
  };
}
