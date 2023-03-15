import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
	apiKey: "AIzaSyCzJgsnbJqwLw3R_9A8K37GT3YeHnjd2a8",
	authDomain: "manage-doc.firebaseapp.com",
	projectId: "manage-doc",
	storageBucket: "manage-doc.appspot.com",
	messagingSenderId: "743082853400",
	appId: "1:743082853400:web:ad8a2584d5ff54e88cef6d"
};
const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );
export const googleProvider = new GoogleAuthProvider();
export const store = getFirestore( app );
export const storage = getStorage( app );
