import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});
