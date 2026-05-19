import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrDcMu6L49CvOtWG4Y64RQweuKUrXbu-M",
    authDomain: "bpp-produk.firebaseapp.com",
    projectId: "bpp-produk",
    storageBucket: "bpp-produk.firebasestorage.app",
    messagingSenderId: "38435149459",
    appId: "1:38435149459:web:d487394a5886221a9adf66"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
