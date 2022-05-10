// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxblaYL6DKhArv7g1sCU4WtgP7yb-959A',
  authDomain: 'my-protfolio-1.firebaseapp.com',
  projectId: 'my-protfolio-1',
  storageBucket: 'my-protfolio-1.appspot.com',
  messagingSenderId: '559030080996',
  appId: '1:559030080996:web:dea20343726978aeab63f1',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
