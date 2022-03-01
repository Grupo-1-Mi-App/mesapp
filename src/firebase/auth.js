import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {addUser} from './firestore.js'
initializeApp(firebaseConfig);

const auth = getAuth();

// Registrar usuario
const registrarUsuario = (email, password, rol, name,callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      addUser({
        email: email,
        name: name,
        rol: rol
      })
      console.log(user);

      callback();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      callback(errorCode);
    });
};

// Login
const login = (email, password, callback, saveEmail) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      saveEmail(user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      callback(errorCode);
    });
};

// Logout
const logout = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
      alert("Te has deslogeado correctamente");
    })
    .catch((error) => {
      console.log(error);
    });
};

//guard
function guardMyroute (to, from, next) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (to.path === "/admin") {
        next("/qr" )
      } else {
        next()
      }
    } else {
      if (to.path !== "/" && to.path !== "/admin") {
        next("/admin");
      } 
      else {
        next(); 
      }
    }
  })
}

export { registrarUsuario, login, logout,  guardMyroute};