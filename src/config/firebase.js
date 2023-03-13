import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyBmFMvATJwcoIhgz7rmYxr3TeQBaxmUNS4",
	authDomain: "center-76d2a.firebaseapp.com",
	projectId: "center-76d2a",
	storageBucket: "center-76d2a.appspot.com",
	messagingSenderId: "751010743007",
	appId: "1:751010743007:web:3d201e994c8b8382529f6a"
};
const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );
export const googleProvider = new GoogleAuthProvider();
export const store = getFirestore( app );
