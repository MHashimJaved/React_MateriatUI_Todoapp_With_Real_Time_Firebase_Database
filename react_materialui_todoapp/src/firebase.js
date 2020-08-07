

  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZqcCKOHOjF_fOOQ0p11VSTdDrEEzRwos",
    authDomain: "react-materialui-todoapp-e1c86.firebaseapp.com",
    databaseURL: "https://react-materialui-todoapp-e1c86.firebaseio.com",
    projectId: "react-materialui-todoapp-e1c86",
    storageBucket: "react-materialui-todoapp-e1c86.appspot.com",
    messagingSenderId: "932451360545",
    appId: "1:932451360545:web:eaaed3e38934db58f8a860",
    measurementId: "G-QSPYN9XMTD"
  });

  
  const db = firebaseApp.firestore();

  export default db;