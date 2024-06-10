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
import { Box, Paper } from '@mui/material';
import { doc, deleteDoc } from "firebase/firestore";
import { FilterCenterFocusSharp } from '@mui/icons-material';
import FireChip from '../../global_components/FireChip';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import FireModal from '../../global_components/FireModal';
import { getApp } from "firebase/app";
function StreamingHome() {
  const [user, setUser] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([{ label: "All", value: "all" }, { label: "Movie", value: "movie" }, { label: "TV Show", value: "tvshow" }]);
  const [activeFilter, setActiveFilter] = useState(filters[0]);
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
      docs.sort((a, b) => {
        if (a.lastWatched > b.lastWatched) {
          return -1;
        }
        if (a.lastWatched < b.lastWatched) {
          return 1;
        }
        return 0;
      });
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



  return (
    <PrivateRoute user={user} setUser={setUser}>

      <Box>
        <SignoutButton setUser={setUser}></SignoutButton>

        <MediaForm fetchDocuments={fetchDocuments} writeShowToFirestore={writeShowToFirestore}></MediaForm>

        <Paper style={{ marginTop: "20px", padding: '20px', backgroundColor: 'white', display: "flex", gap: "10px" }}>
          {filters.map((filter) => <FireChip label={filter.label} active={filter == activeFilter} onClick={() => { setActiveFilter(filter) }} />)}
        </Paper>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            documents.map((doc) => {
              return (
                <>
                  {
                    activeFilter.value == "all" || activeFilter.value == doc.idType ?
                      <MediaGrid deleteDocument={deleteDocument} updateEpisode={updateDocument} episode={doc} key={doc.id}></MediaGrid>
                      : <> </>
                  }
                </>
              )
            })
          }
        </Box>

      </Box>

    </PrivateRoute>

  );
}

export default StreamingHome;
