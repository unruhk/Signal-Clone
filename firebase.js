import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkJUWZxcgJd43GSXxTUpaClAJCpU8gfyo",
    authDomain: "signal-clone-e979f.firebaseapp.com",
    projectId: "signal-clone-e979f",
    storageBucket: "signal-clone-e979f.appspot.com",
    messagingSenderId: "385319749590",
    appId: "1:385319749590:web:9c43c423c599d5ff450677"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }