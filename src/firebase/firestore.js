import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";

initializeApp(firebaseConfig);

const db = getFirestore();

const col = "users";
// Agregar datos

const addData = async(data) => {
  try {
    const docRef = await addDoc(collection(db, col), data);
    console.log("Document written with ID: ", docRef.id);
    // callback();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document");
  }
};

export { addData };