// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8yuwm4bt9pys0ZpHNh4C2VkpEuYWbIxc",
  authDomain: "netflix-clone-40212.firebaseapp.com",
  projectId: "netflix-clone-40212",
  storageBucket: "netflix-clone-40212.appspot.com",
  messagingSenderId: "332439017955",
  appId: "1:332439017955:web:c0c2c4a6102ec5676968d6",
  measurementId: "G-VRZ7E25ZYC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;  