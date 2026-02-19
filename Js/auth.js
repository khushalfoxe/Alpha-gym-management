import { getAuth, 
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { app } from "./firebase-config.js";

const auth = getAuth(app);

// SIGNUP + EMAIL VERIFY
export function signup(email, password){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    sendEmailVerification(userCredential.user);
    alert("Verification email sent!");
  });
}

// LOGIN CHECK
export function login(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    if(userCredential.user.emailVerified){
      alert("Login success");
    } else{
      alert("Verify email first!");
    }
  });
}
