import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyDlRNVA8C7D9_Aan0uwEmcc_OhQFXbfKsg",
  authDomain: "clone-336f5.firebaseapp.com",
  databaseURL: "https://clone-336f5.firebaseio.com",
  projectId: "clone-336f5",
  storageBucket: "clone-336f5.appspot.com",
  messagingSenderId: "169505719693",
  appId: "1:169505719693:web:02358f8e83b4576dcae9c4",
  measurementId: "G-G6JNDXMKP6"
};

const firebaseApp=  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
