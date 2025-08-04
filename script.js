// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUser WithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs16_nJMPUafekETZmX5Fy3sS7grAe2KA",
    authDomain: "aichat-33a75.firebaseapp.com",
    projectId: "aichat-33a75",
    storageBucket: "aichat-33a75.appspot.com",
    messagingSenderId: "449007930511",
    appId: "1:449007930511:web:183e558839ce857557b4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

// Registration
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;

    if (password !== confirm) {
        alert('Password tidak cocok!');
        return;
    }

    createUser WithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
                last_login: Date.now()
            });
            alert('Registrasi berhasil!');
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login berhasil!');
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Dashboard
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('usernameDisplay').innerText = user.displayName || user.email;
    } else {
        window.location.href = 'login.html';
    }
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    signOut(auth).then(() => {
        alert('Logout berhasil!');
        window.location.href = 'index.html';
    }).catch((error) => {
        alert('Error: ' + error.message);
    });
});
