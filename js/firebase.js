import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkB-Mmh7NFTu1w2y0On4ToqyEteved82c",
  authDomain: "mexican-food-db.firebaseapp.com",
  projectId: "mexican-food-db",
  storageBucket: "mexican-food-db.appspot.com",
  messagingSenderId: "117157223611",
  appId: "1:117157223611:web:fb02fffb3f26f74d6e1d9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "menu-mexican-food"), { title, description });

//Carga de datos del menu de Comida Mexicana
export const onGetMexicanMenu = (callback) =>{
  console.log("Cargando datos de Menu Comida Mexicana.");
  onSnapshot(collection(db, "menu-mexican-food"), callback);
}

//Carga de datos del menu de Combos
export const onGetMenuCombo = (callback) =>{
  console.log("Cargando datos de Menu Combos.");
  onSnapshot(collection(db, "menu-combo"), callback);
}

//Carga de datos del menu de Comida a la Carta
export const onGetMenuCarte= (callback) =>{
  console.log("Cargando datos de Menu Combos.");
  onSnapshot(collection(db, "menu-carte"), callback);
}

//Carga de datos del menu de Extras
export const onGetMenuExtra= (callback) =>{
  console.log("Cargando datos de Menu Extras.");
  onSnapshot(collection(db, "menu-extra"), callback);
}

//Carga de datos del menu de Bebidas
export const onGetMenuDrink= (callback) =>{
  console.log("Cargando datos de Menu Bebidas.");
  onSnapshot(collection(db, "menu-drink"), callback);
}

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "menu-mexican-food", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "menu-mexican-food", id), newFields);

export const getTasks = () => getDocs(collection(db, "menu-mexican-food"));
