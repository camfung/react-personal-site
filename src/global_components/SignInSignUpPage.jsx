import React, { useState, useEffect, useCallback } from 'react';
import { Container, Tab, Tabs, Box, TextField, Button, Typography, Paper } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import 'firebase/compat/firestore';
const PrivateRoute = ({ children, user, setUser }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [setUser]);

    const signInUser = useCallback(() => {
        const auth = getAuth();
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
    }, [user, setUser, email, password])

    const handleSignIn = () => {
        try {
            console.log(email, password)
            signInUser(email, password);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const createUser = useCallback((email, password) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }, [setUser]);

    const handleSignUp = () => {
        try {
            console.log(email, password)
            createUser(email, password);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <>
            <NavBar></NavBar>
            {
                !user ?
                    (
                        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                            <Paper elevation={3} sx={{ width: '100%', p: 3 }}>
                                <Box>
                                    <Typography variant="h5" >
                                        Cameron's Streaming Service
                                    </Typography>

                                </Box>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={isSignUp ? 1 : 0} onChange={(event, newValue) => setIsSignUp(!!newValue)} centered>
                                        <Tab label="Sign In" />
                                        <Tab label="Sign Up" />
                                    </Tabs>
                                </Box>
                                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {isSignUp ? (
                                        <Button variant="contained" onClick={handleSignUp} fullWidth>
                                            Sign Up
                                        </Button>
                                    ) : (
                                        <Button variant="contained" onClick={handleSignIn} fullWidth>
                                            Sign In
                                        </Button>
                                    )}
                                </Box>
                                {isSignUp ? (
                                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                                        Already have an account? Switch to the Sign In tab.
                                    </Typography>
                                ) : (
                                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                                        Need an account? Switch to the Sign Up tab.
                                    </Typography>
                                )}
                            </Paper>
                        </Container>

                    ) : (
                        <>
                            {children}
                        </>
                    )
            }
            <Footer></Footer>

        </>
    );
};

export default PrivateRoute;
