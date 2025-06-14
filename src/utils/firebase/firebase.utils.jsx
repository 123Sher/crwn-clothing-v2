import { initializeApp } from 'firebase/app';
//initializeApp is the function that:
// Initializes and configures your Firebase app using a config object.
// It sets up the connection between your web app and your Firebase project
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
//It's using these that we're able to create our Google sign in.This is just very specific setup for Firebase.

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
//Initializes and gives you access to your Cloud Firestore database.
//Creates a reference to a specific document in a collection.
//Reads/fetches data from a document.
//Creates or overwrites a document with data.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjwdVvcES_g1v47OKTs7DJvzmJewWE6w",
  authDomain: "crwn-clothing-db-f1e46.firebaseapp.com",
  projectId: "crwn-clothing-db-f1e46",
  storageBucket: "crwn-clothing-db-f1e46.firebasestorage.app",
  messagingSenderId: "960341815255",
  appId: "1:960341815255:web:4224b3be4acb204718a592",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => { 
//userAuth is the authenticated user object returned by Firebase after login/sign-up
    const userDocRef = doc(db, 'users', userAuth.uid); //this line creates a reference to the document

    console.log(userDocRef);// object that reference some document reference in the database.
    //creates a reference to where the document would exist in Firestore.
    //It doesn’t care if the users collection or the document exists yet.
    // its a document reference object.

    const userSnapshot = await getDoc(userDocRef);
    //The snapshot allows us to check whether or not there is an instance of it that exists inside of our database.
    // also allows us to access data.
    console.log(userSnapshot); 
    console.log(userSnapshot.exists());// false 
    // // we can check whether a document exists or not using this object.


    //if user data doesnt exists
    if(!userSnapshot.exists())
    {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        //create or overwrite the document at the specified path.
          await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
          });
      }
      catch(error){
        console.log('error creating a user', error.message);
      }
    }
    //if the user data exists
    return userDocRef;
}