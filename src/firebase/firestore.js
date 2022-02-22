import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import { getFirestore, collection, addDoc, query, getDocs } from "firebase/firestore";

initializeApp(firebaseConfig);

const db = getFirestore();

const colUsers = "users";
// Agregar datos

const addUser = async(data) => {
  try {
    const docRef = await addDoc(collection(db, colUsers), data);
    console.log("Document written with ID: ", docRef.id);
    // callback();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document");
  }
};

// Obtener datos
const getUsers = async (/*callback*/) => {
  const q = query(collection(db, colUsers));
  try {
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
      let user = { ...doc.data(), id: doc.id};
      data.push(user);
    });
    console.log(data)
    //callback(data)
  } catch (e) {
    console.log("Error", e);
  }
};

export { addUser, getUsers };