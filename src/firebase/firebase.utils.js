import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyACSrVssoh3EHs0dYCr3A3ZZ2GDzbxfP44",
  authDomain: "clothing-web-83069.firebaseapp.com",
  projectId: "clothing-web-83069",
  storageBucket: "clothing-web-83069.appspot.com",
  messagingSenderId: "1001540559199",
  appId: "1:1001540559199:web:f4b7d1db645fa13137d6ea",
  measurementId: "G-Q79D57J2CN"
};

const app = firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = app.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((res) => res.user).catch(err => console.log(err));
}

export default firebase;