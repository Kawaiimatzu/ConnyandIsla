import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey:"AIzaSyB64dYVoMH_XTE0AmK4KtF8ITn07ER7apE",

    authDomain:"connyandisla-41f9c.firebaseapp.com",

    projectId:"connyandisla-41f9c",

    storageBucket:"connyandisla-41f9c.firebasestorage.app",

    messagingSenderId:"726732446509",

    appId:"1:726732446509:web:724a73bd55cd83340791a4"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {

    db,

    collection,

    addDoc,

    serverTimestamp

};