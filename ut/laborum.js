import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, new GoogleAuthProvider())
  .then((result) => {
    // Extract the Google Access Token and User information
    const { credential, user } = result;
    const token = credential?.accessToken; // Optional chaining in case credential is undefined

    // Now you can use the Google Access Token to access Google APIs or user info
    // ...

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used for sign-in
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used
    const credential = error.credential;
    // You can also log the error or display it to the user
    // ...
  });
