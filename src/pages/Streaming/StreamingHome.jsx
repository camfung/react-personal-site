import SignoutButton from '../../global_components/SignoutButton';
import { DndContext } from '@dnd-kit/core';
import FireButton from '../../global_components/Button';
import PrivateRoute from '../../global_components/SignInSignUpPage';
import VideoPlayer from './VideoPlayer';
import { DraggableMediaCard } from './DraggableMediaCard';
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
import { FilterCenterFocusSharp, Timeline } from '@mui/icons-material';
import FireChip from '../../global_components/FireChip';
import { Divider, Typography } from '@mui/material';
import { TestDraggable } from './testdrag';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';

import FireModal from '../../global_components/FireModal';

const titles = ["harry potter and the deathly hallows", "real steal", "red bug", "the night before christmas", "ben ten", "friends", "how i met your mother", "there is only one", "like i used to be", "to be a bride"]
export const watchStatuses = {
  currentlyWatching: "currentlyWatching",
  watchList: "watchList",
  archived: "archived"
}

export class Episode {
  constructor(title, watchStatus) {
    this.seasonNumber = 1
    this.episodeNumber = 1
    this.imdbId = "tt018403941"
    this.idType = Math.random() > .5 ? "movie" : "tvshow"
    this.title = title
    this.lastWatched = Date()
    this.watchStatus = watchStatus
  }
}

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
      <DndContext>
        <Paper style={{ margin: "20px", padding: '20px', backgroundColor: 'white', display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <Box>

            <h1>Hello Cameron</h1>
            <h2>To add a show do the following:</h2>
            <ol>
              <li>Go to the imdb page of the show/movie you want to watch</li>
              <li>Copy the tt id at the end of the url</li>
              <li>add a title and paste the id in the id box</li>
            </ol>
          </Box>
          <Box>

            <SignoutButton setUser={setUser}></SignoutButton>
          </Box>
        </Paper>
        <Box>
          <Box sx={{ margin: "20px" }}>


            <MediaForm fetchDocuments={fetchDocuments} writeShowToFirestore={writeShowToFirestore}></MediaForm>

            <Paper style={{ marginTop: "20px", padding: '20px', backgroundColor: 'white', display: "flex", gap: "10px" }}>
              {filters.map((filter) => <FireChip label={filter.label} active={filter == activeFilter} onClick={() => { setActiveFilter(filter) }} />)}
            </Paper>
          </Box>

          <Box sx={{ margin: "20px" }}>

            <Typography sx={{ margin: "16px" }} >Continue Watching</Typography>
            <Divider sx={{ backgroundColor: "white", margin: "10px" }}></Divider>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
              {
                documents.map((doc) => {
                  return (
                    <>
                      {
                        (activeFilter.value == "all" || activeFilter.value == doc.idType) && doc.watchStatus == watchStatuses.currentlyWatching ?
                          <DraggableMediaCard deleteDocument={deleteDocument} updateEpisode={updateDocument} episode={doc} key={doc.id}></DraggableMediaCard>
                          : <> </>
                      }
                    </>
                  )
                })
              }
            </Box>

            <Typography sx={{ margin: "16px" }} >Watch List</Typography>
            <Divider sx={{ backgroundColor: "white", margin: "10px" }}></Divider>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
              {
                documents.map((doc) => {
                  return (
                    <>
                      {
                        (activeFilter.value == "all" || activeFilter.value == doc.idType) && doc.watchStatus == watchStatuses.watchList ?
                          <DraggableMediaCard deleteDocument={deleteDocument} updateEpisode={updateDocument} episode={doc} key={doc.id}></DraggableMediaCard>
                          : <> </>
                      }
                    </>
                  )
                })
              }
            </Box>

            <Typography sx={{ margin: "16px" }} >Archive</Typography>
            <Divider sx={{ backgroundColor: "white", margin: "10px" }}></Divider>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
              {
                documents.map((doc) => {
                  return (
                    <>
                      {
                        (activeFilter.value == "all" || activeFilter.value == doc.idType) && (doc.watchStatus == watchStatuses.archived || doc.watchStatus == null) ?

                          <DraggableMediaCard deleteDocument={deleteDocument} updateEpisode={updateDocument} episode={doc} key={doc.id}></DraggableMediaCard>
                          : <> </>
                      }
                    </>
                  )
                })
              }
            </Box>

          </Box>
        </Box>

        <TestDraggable> </TestDraggable>

      </DndContext>
    </PrivateRoute >

  );
}

export default StreamingHome;
