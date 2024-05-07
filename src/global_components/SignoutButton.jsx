import React from 'react';
import FireButton from './Button';
import firebase from 'firebase/compat/app';
const SignoutButton = ({ setUser }) => {
    const handleSignOut = () => {
        firebase.auth().signOut().then(
            function () {
                setUser(null);
            },
            function (error) {
                console.error('Sign Out Error', error);
            }
        );
    };

    return <FireButton onClick={handleSignOut}>Sign Out</FireButton>;
};

export default SignoutButton;
