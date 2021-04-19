import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"


var firebaseConfig = {
  apiKey: "AIzaSyDadi9lOcmPKmf4T_I1rqMzimyu_H1JntI",
  authDomain: "phrsystem-e021b.firebaseapp.com",
  projectId: "phrsystem-e021b",
  storageBucket: "phrsystem-e021b.appspot.com",
  messagingSenderId: "766205711508",
  appId: "1:766205711508:web:c9d89f9f1443bd7851d081"
};

firebase.initializeApp(firebaseConfig)


// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
export default firebase
 