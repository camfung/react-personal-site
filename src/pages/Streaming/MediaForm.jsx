import { Divider } from '@mui/material';
import ReactSearchBox from "react-search-box";
import React, { useState } from 'react';
import FireButton from '../../global_components/Button.jsx';
import axios from "axios";
import { Paper, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';
import { json } from 'react-router-dom';
import { TitleSharp } from '@mui/icons-material';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import { getApp } from 'firebase/app';

export default function MediaForm({ writeShowToFirestore, fetchDocuments }) {
    const [data, setData] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        imdbId: '',
        idType: 'movie', // 'movie' or 'tvshow'
        seasonNumber: '',
        episodeNumber: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    async function searchMedia(title) {

        const functions = getFunctions(getApp());
        connectFunctionsEmulator(functions, "127.0.0.1", 5001);
        console.log("🚀 ~ test ~ functions:", functions)
        const search = httpsCallable(functions, 'searchMedia');

        const response = await search({
            "query": `${title}`,
            "include_adult": true,
            "language": "en",
            // "primary_release_year": "2010",
            "page": 1,
            "region": "US",
            // "year": "2010"
        })
        return response.data
    }
    return (
        <Paper sx={{ padding: '20px', backgroundColor: 'white', margin: 2 }}>
            <Box component="form" noValidate autoComplete="off">
                <Box>
                    <ReactSearchBox
                        placeholder="search for a title"
                        onChange={(searchString) => {
                            const lastCharacter = searchString[searchString.length - 1]
                            // if (lastCharacter == " ") {
                            searchMedia(searchString).then((results) => {
                                console.log("🚀 ~ searchMedia ~ results:", results)
                                const mediaData = results.map((result) => ({
                                    key: result.id,
                                    value: result.title || result.name,
                                    ...result
                                }))
                                console.log("🚀 ~ mediaData ~ mediaData:", mediaData)
                                setData(mediaData);
                            });
                            // }
                        }}
                        data={data}
                        onSelect={(record) => {
                            const showData = {
                                episodeNumber: 1,
                                seasonNumber: 1,
                                idType: record.item.idType,
                                imdbId: record.item.id,
                                title: record.item.name
                            }
                            console.log("🚀 ~ MediaForm ~ showData:", showData)
                            writeShowToFirestore(showData)



                            fetchDocuments()
                        }}
                    />
                    <FireButton onClick={() => {

                        // console.log("🚀 ~ MediaForm ~ showData.selectedShow:", selectedShow)
                        // // console.log("🚀 ~ MediaForm ~ showData:", showData)

                        // writeShowToFirestore(showData)
                    }} text="Add Title"></FireButton>
                </Box>
                <Divider></Divider>
                <TextField
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="IMDb ID"
                    name="imdbId"
                    value={formData.imdbId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl component="fieldset" margin="normal" fullWidth>
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup
                        row
                        name="idType"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                        <FormControlLabel value="tvshow" control={<Radio />} label="TV Show" />
                    </RadioGroup>
                </FormControl>
                {formData.idType === 'tvshow' && (
                    <>
                        <TextField
                            label="Season Number"
                            name="seasonNumber"
                            type="number"
                            value={formData.seasonNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Episode Number"
                            name="episodeNumber"
                            type="number"
                            value={formData.episodeNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                    </>
                )}
                <FireButton onClick={() => {
                    writeShowToFirestore(formData)
                    fetchDocuments()
                }} text="Add Title"></FireButton>

            </Box>
        </Paper>
    );
}
