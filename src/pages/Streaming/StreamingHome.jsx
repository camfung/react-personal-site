import SignoutButton from '../../global_components/SignoutButton';
import FireButton from '../../global_components/Button';
import PrivateRoute from '../../global_components/SignInSignUpPage';
import VideoPlayer from './VideoPlayer';
import MediaGrid from './MediaCard';
import MediaForm from './MediaForm';
import React, { useCallback, useEffect, useState } from 'react';
import NavBar from "../../global_components/NavBar";
import Footer from '../../global_components/Footer';
import "../../global_components/backgroundcolors.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { create } from '@mui/material/styles/createTransitions';
import firebase from 'firebase/compat/app';
import firestore from 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Box } from '@mui/material';
import { doc, deleteDoc } from "firebase/firestore";
import { Chip, Stack, Paper } from '@mui/material';
import FireChip from '../../global_components/FireChip';
function StreamingHome() {
  const [user, setUser] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterState, setFilterState] = useState("All");
  const fetchDocuments = async () => {
    const db = firebase.firestore();
    if (!user) {
      setDocuments([])
      setLoading(false)
      return
    }

    try {
      setLoading(true);
      const querySnapshot = await db.collection(`streamingApp/userIds/${user.uid}`).get();

      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(docs)
      setDocuments(docs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user documents:", error);
      setLoading(false);
    }
  }
  useEffect(() => {

    fetchDocuments();
  }, [user]);

  const writeShowToFirestore = useCallback(async (showData) => {
    const db = firebase.firestore();
    const userRef = db.collection('streamingApp').doc('userIds').collection(user.uid);

    try {
      const record = {
        episodeNumber: showData.episodeNumber,
        seasonNumber: showData.seasonNumber,
        idType: showData.idType,
        imdbId: showData.imdbId,
        title: showData.title
      }
      const showRef = await userRef.add(record);
    } catch (error) {
      console.error('Error adding show:', error);
    }
  }, [user]);

  const updateDocument = async (docId, newData) => {
    const db = firebase.firestore();
    if (!user) {
      console.error("No user logged in");
      return;
    }

    try {
      setLoading(true);
      const docRef = db.collection(`streamingApp/userIds/${user.uid}`).doc(docId);
      await docRef.update(newData);
      setLoading(false);
    } catch (error) {
      console.error("Error updating document:", error);
      setLoading(false);
    }
  }

  const deleteDocument = useCallback(async (docId) => {
    const db = firebase.firestore();
    if (!user) {
      console.error("No user logged in");
      return;
    }

    try {
      setLoading(true);
      const docRef = doc(db, `streamingApp/userIds/${user.uid}`, docId);
      await deleteDoc(docRef);
      let docs = documents.filter(doc => doc.id !== docId);
      setDocuments(docs);
      console.log("Document successfully deleted");
    } catch (error) {
      console.error("Error deleting document:", error);
    } finally {
      setLoading(false);
    }
  }, [documents, user]);
  const toggleFilter = useCallback((filter) => {
    setFilterState(filter);
  }, [setFilterState, filterState])
  return (
    <PrivateRoute user={user} setUser={setUser}>

      <Box>
        <SignoutButton setUser={setUser}></SignoutButton>

        <MediaForm filterState={filterState} fetchDocuments={fetchDocuments} writeShowToFirestore={writeShowToFirestore}></MediaForm>

        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
          <Stack direction="row" spacing={1}>
            <FireChip
              label="All"
              active={filterState == 'All'}
              onClick={() => toggleFilter('All')}
            />
            <FireChip
              label="Movies"
              active={filterState == 'Movies'}
              onClick={() => toggleFilter('Movies')}
            />
            <FireChip
              label="Tv Shows"
              active={filterState == 'Tv Shows'}
              onClick={() => toggleFilter('Tv Shows')}
            />
          </Stack>
        </Paper>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            documents.map((doc) => {
              return <MediaGrid deleteDocument={deleteDocument} updateEpisode={updateDocument} episode={doc} key={doc.id}></MediaGrid>
            })
          }
        </Box>

      </Box>

    </PrivateRoute>

  );
}

export default StreamingHome;
