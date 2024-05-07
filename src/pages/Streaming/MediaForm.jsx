import React, { useState } from 'react';
import FireButton from '../../global_components/Button.jsx';
import { Paper, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';

export default function MediaForm({ writeShowToFirestore, fetchDocuments }) {
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

    return (
        <Paper style={{ padding: '20px', backgroundColor: 'white' }}>
            <Box component="form" noValidate autoComplete="off">
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
