import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-wKwXGIxrdbSvrXgI1X3K_Rc_0l7i6EM",
  authDomain: "personal-website-1f75a.firebaseapp.com",
  projectId: "personal-website-1f75a",
  storageBucket: "personal-website-1f75a.appspot.com",
  messagingSenderId: "5773039824",
  appId: "1:5773039824:web:53d539c67a2d7368c626d5",
  measurementId: "G-M7687ENKPK",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
