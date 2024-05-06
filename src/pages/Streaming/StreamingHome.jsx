import React, { useCallback, useState } from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import Button from '../../global_components/Button';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { create } from '@mui/material/styles/createTransitions';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function StreamingHome() {

  const [user, setUser] = useState(null)

  const signInUser = useCallback(() => {
    const auth = getAuth();
    let email = "test@g.ca"
    let password = "123456"
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const usr = userCredential.user;
        setUser(usr)
        console.log("🚀 ~ .then ~ usr:", usr)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }, [user, setUser])

  const createUser = () => {
    let email = "test@g.ca"
    let password = "123456"
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("🚀 ~ .then ~ user:", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }


  const writeShowToFirestore = useCallback(async () => {
    const showData = {
      episodeNumber: 1,
      seasonNumber: 1,
      isShow: true,
      idType: "IMDB",
      id: "tt1234567",
      title: "Example Show Title"
    }
    const db = firebase.firestore();
    const userRef = db.collection('streamingApp').doc('userIds').collection(user.uid);

    try {
      const showRef = await userRef.add({
        episodeNumber: showData.episodeNumber,
        seasonNumber: showData.seasonNumber,
        isShow: showData.isShow,
        idType: showData.idType,
        id: showData.id,
        title: showData.title
      });
      console.log('Show added with ID:', showRef.id);
    } catch (error) {
      console.error('Error adding show:', error);
    }
  }, [user]);


  return (
    <div class="wrapper">
      <NavBar></NavBar>
      <button onClick={createUser}>Create User</button>
      <button onClick={signInUser}>Sign in</button>
      <button onClick={writeShowToFirestore}> write show</button>
      {
        user ? <p>{user.email}</p> : <p>Not signed in</p>
      }

      <Footer></Footer>
    </div>
  );
}

export default StreamingHome;
