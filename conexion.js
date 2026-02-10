import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Tu configuración de Firebase que acabas de obtener
const firebaseConfig = {
  apiKey: "AIzaSyBEszqWYoGEk4vOk4MEhf9k73qFCI8xtis",
  authDomain: "club-constitucion.firebaseapp.com",
  projectId: "club-constitucion",
  storageBucket: "club-constitucion.firebasestorage.app",
  messagingSenderId: "882017273470",
  appId: "1:882017273470:web:1487a980977a2cfb76ba2f",
  measurementId: "G-2R18JY54ZZ"
};

// Inicializamos Firebase y la Base de Datos
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- FUNCIONES PARA EL MANAGER DEL CLUB ---

// Función para agregar un socio nuevo
export const agregarSocio = async (nombre, apellido, dni) => {
  try {
    const docRef = await addDoc(collection(db, "socios"), {
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      fechaAlta: new Date()
    });
    console.log("Socio guardado con ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error al agregar socio: ", e);
  }
};

// Función para traer la lista de todos los socios
export const obtenerSocios = async () => {
  const querySnapshot = await getDocs(collection(db, "socios"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};