import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyBxeDpNR6Q8y-bmJVnTkdvjeq4iSruwDIY",
	authDomain: "hack-heroes-30faf.firebaseapp.com",
	projectId: "hack-heroes-30faf",
	storageBucket: "hack-heroes-30faf.appspot.com",
	messagingSenderId: "945509594785",
	appId: "1:945509594785:web:5f1fd258a10b3b9bffe2e0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

document.getElementById("login").addEventListener("click", function (event) {
	login();
});

function login() {
	var email = document.getElementById("login-email").value;
	var password = document.getElementById("login-password").value;
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log("Zalogowano!");

		})
		.catch((error) => {
			document.getElementById("login-password").value = "";
			document.getElementById("login-password").focus();
			console.log("Błędne dane logowania!");
			return
		});
}

