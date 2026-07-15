// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyB64dYVoMH_XTE0AmK4KtF8ITn07ER7apE",

    authDomain: "connyandisla-41f9c.firebaseapp.com",

    projectId: "connyandisla-41f9c",

    storageBucket: "connyandisla-41f9c.firebasestorage.app",

    messagingSenderId: "726732446509",

    appId: "1:726732446509:web:724a73bd55cd83340791a4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// Login

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    if (email === "" || password === "") {

        alert("Please complete all fields.");

        return;

    }

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        })

        .catch((error) => {

            alert(error.message);

        });

});