import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import { getFirestore, collection, addDoc, query, getDocs, deleteDoc, doc } from "firebase/firestore";

initializeApp(firebaseConfig);

const db = getFirestore();

const colUsers = "users";
const colProducts = "products";

// Agregar datos

//Usuario
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

// Productos
const addProduct = async(data) => {
  try {
    const docRef = await addDoc(collection(db, colProducts), data);
    console.log("Document written with ID: ", docRef.id);
    // callback();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document");
  }
};

// Obtener datos

//Usuario
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

const getProducts = async (/*callback*/) => {
  const q = query(collection(db, colProducts));
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

//Borrar datos

// Usuario
const deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, colUsers, id));
    alert("Usuario Eliminado");
  } catch (e) {
    console.log("Error", e);
  }
};

// Productos
const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, colProducts, id));
    alert("Producto Eliminado");
  } catch (e) {
    console.log("Error", e);
  }
};


export { addUser, getUsers, addProduct, getProducts, deleteUser, deleteProduct };