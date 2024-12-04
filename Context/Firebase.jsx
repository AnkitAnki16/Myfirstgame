import { createContext, useContext ,useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCh43mIsUVPrnNQ_B5gfbiWVJMXWpDXFvw",
  authDomain: "vite-contact-f71ba.firebaseapp.com",
  databaseURL: "https://vite-contact-f71ba-default-rtdb.firebaseio.com",
  projectId: "vite-contact-f71ba",
  storageBucket: "vite-contact-f71ba.firebasestorage.app",
  messagingSenderId: "478064192829",
  appId: "1:478064192829:web:e9a489c963bce06eec6954",
};
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
 const GoogleAuth = new GoogleAuthProvider();
 const firestore =getFirestore(firebaseApp)

export const FirebaseProvider = (props) => {

const [user, setUser]=useState(null)
  useEffect(()=>{
   onAuthStateChanged(firebaseAuth,(user) =>{
   
    if(user) setUser(user);
    else setUserProperties(null)
   })
  },[])
  const signup = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const LoginUser = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinGoogle =()=>signInWithPopup(firebaseAuth, GoogleAuth)

  const handeCreate =(name, isbn, price, cover)=>{

  }
   
  const isLoggedIn = user? true : false;
  return (
    <FirebaseContext.Provider value={{ signup, LoginUser ,signinGoogle,handeCreate, isLoggedIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
