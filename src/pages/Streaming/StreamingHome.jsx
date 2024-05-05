import React from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import Button from '../../global_components/Button';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { create } from '@mui/material/styles/createTransitions';

function StreamingHome() {

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


  return (
    <div class="wrapper">
      <NavBar></NavBar>
      <button onClick={createUser}>Create User</button>


      <Footer></Footer>
    </div>
  );
}

export default StreamingHome;
