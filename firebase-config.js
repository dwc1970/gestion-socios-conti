const firebaseConfig = {
  apiKey: "AIzaSyBEszqWYoGEk4vOk4MEhf9k73qFCI8xtis",
  authDomain: "club-constitucion.firebaseapp.com",
  projectId: "club-constitucion",
  storageBucket: "club-constitucion.firebasestorage.app",
  messagingSenderId: "882017273470",
  appId: "1:882017273470:web:1487a980977a2cfb76ba2f",
  measurementId: "G-2R18JY54ZZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();