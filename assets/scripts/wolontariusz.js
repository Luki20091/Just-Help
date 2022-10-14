import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

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

document.getElementById("register").addEventListener("click", function (event) {
	register();
});
document.getElementById("login").addEventListener("click", function (event) {
	login();
});

function register() {
	var username = document.getElementById("register-username").value;
	var email = document.getElementById("register-email").value;
	var password = document.getElementById("register-password").value;
	var confirmpassword = document.getElementById("register-confirm-password").value;

	if (validate_email(email) == false || validate_register_password(password, confirmpassword) == false) {
		document.getElementById("register-password").value = "";
		document.getElementById("register-confirm-password").value = "";
		document.getElementById("register-password").focus();
		console.log("B³êdne dane rejestracji!");
		return
	}

	createUserWithEmailAndPassword(auth, email, password)
		.then(function () {
			var user = auth.currentUser

			var database_ref = database.ref()

			var user_data = {
				lp1_username: username,
				lp2_email: email,
				lp3_last_login: getDateString(),
				lp4_account_create: getDateString()
			}

			database_ref.child("users/" + user.uid).set(user_data)

			var userId = firebase.auth().currentUser.uid;
			return firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
				username = (snapshot.val() && snapshot.val().lp1_username) || 'Anonymous';
				console.log("Zarejestrowano!");
				login();
				
			});
		})
		.catch((error) => {
			document.getElementById("register-password").value = "";
			document.getElementById("register-confirm-password").value = "";
			document.getElementById("register-password").focus();
			console.log("B³êdne dane rejestracji!");
			return
		});
}





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
			console.log("B³êdne dane logowania!");
			return
		});
}























function getDateString() {
	const date = new Date();
	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, '0');
	const day = `${date.getDate()}`.padStart(2, '0');
	const hours = `${date.getHours()}`.padStart(2, '0');
	const minutes = `${date.getMinutes()}`.padStart(2, '0');
	const seconds = `${date.getSeconds()}`.padStart(2, '0');
	return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`
};


function validate_email(email) {
	var expression = /^[^@]+@\w+(\.\w+)+\w$/
	if (expression.test(email) == true) {
		return true
	} else {
		return false
	}
}

function validate_register_password(password, confirmpassword) {
	if (password < 6 || password != confirmpassword) {
		return false
	}
	else {
		return true
	}
}
