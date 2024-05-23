import { Divider } from '@mui/material';
import ReactSearchBox from "react-search-box";
import React, { useState } from 'react';
import FireButton from '../../global_components/Button.jsx';
import axios from "axios";
import { Paper, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';
import { json } from 'react-router-dom';

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

        try {
            const tvRequest = await axios.get(`https://pdftts.azurewebsites.net/api/searchshow?title=${title}`);

            console.log(tvRequest)
            let results = tvRequest.data

            if (!results || results.length === 0) {
                return;
            }
            return results;
        } catch (error) {
            console.error('Error fetching media:', error);
            return [];
        }
    }
    return (
        <Paper sx={{ padding: '20px', backgroundColor: 'white', margin: 2 }}>
            <Box component="form" noValidate autoComplete="off">
                <Box>
                    <ReactSearchBox
                        placeholder="search for a title"
                        onChange={(searchString) => {
                            searchMedia(searchString).then((results) => {
                                try {

                                    let data = JSON.parse(results)
                                }
                                catch (err) {
                                    console.log(err)
                                }

                                setData(data.map((result) => ({
                                    key: result.id,
                                    value: result.title || result.name,
                                    ...result
                                })));
                            });
                        }}
                        value="Doe"
                        data={data}
                        onSelect={(record) => {
                            setSelectedShow({ ...record });
                        }}
                    />
                    <FireButton onClick={() => {
                        const showData = {
                            episodeNumber: 1,
                            seasonNumber: 1,
                            idType: selectedShow.item.idType,
                            imdbId: selectedShow.item.id,
                            title: selectedShow.item.name
                        }

                        writeShowToFirestore(showData)
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
