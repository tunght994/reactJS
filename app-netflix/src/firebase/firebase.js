import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDfIDJnvMOowNlYH0KKKPG24FV5Bho2Ey4",
  authDomain: "app-netflix-13e25.firebaseapp.com",
  projectId: "app-netflix-13e25",
  storageBucket: "app-netflix-13e25.appspot.com",
  messagingSenderId: "526857799368",
  appId: "1:526857799368:web:c3e586c5fc558e429487fd",
  measurementId: "G-PT73LDWSV7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db