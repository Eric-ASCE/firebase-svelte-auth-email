import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8e5IZnqjc_KvdztHhxTOqf_bwUA71oMk",
  authDomain: "examplemasterasce.firebaseapp.com",
  databaseURL: "https://examplemasterasce.firebaseio.com",
  projectId: "examplemasterasce",
  storageBucket: "examplemasterasce.appspot.com",
  messagingSenderId: "197892148009",
  appId: "1:197892148009:web:142e6468fc359d3903c538",
  measurementId: "G-89CLGLT1BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
 