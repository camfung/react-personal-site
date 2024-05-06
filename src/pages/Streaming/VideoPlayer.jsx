import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const VideoPlayer = () => {
    const [videoSrc, setVideoSrc] = useState('https://vidsrc.xyz/embed/tv/tt0460649/4-13');
    const [season, setSeason] = useState(1);
    const [episode, setEpisode] = useState(1);

    const handleNextEpisode = () => {
        // Logic to change to the next episode
        setEpisode(episode + 1);
        // Update videoSrc based on the next episode
    };

    const handlePreviousEpisode = () => {
        // Logic to change to the previous episode
        setEpisode(episode - 1);
        // Update videoSrc based on the previous episode
    };

    const handleSeasonEpisodeChange = (e) => {
        e.preventDefault();
        const seasonNum = e.target.season.value;
        const episodeNum = e.target.episode.value;
        // Update the video source based on season and episode
        console.log(`Change to season ${seasonNum}, episode ${episodeNum}`);
        // Update state or fetch new video source
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <iframe src="https://vidsrc.xyz/embed/tv/tt0460649/4-13" width="800" height="450" frameborder="0" allowfullscreen></iframe>
            <Box sx={{ my: 2 }}>
                <Button onClick={handlePreviousEpisode} variant="contained" sx={{ mx: 1 }}>Previous Episode</Button>
                <Button onClick={handleNextEpisode} variant="contained" sx={{ mx: 1 }}>Next Episode</Button>
            </Box>
            <form onSubmit={handleSeasonEpisodeChange}>
                <TextField
                    label="Season"
                    name="season"
                    type="number"
                    variant="outlined"
                    sx={{ mx: 1 }}
                    defaultValue={season}
                />
                <TextField
                    label="Episode"
                    name="episode"
                    type="number"
                    variant="outlined"
                    sx={{ mx: 1 }}
                    defaultValue={episode}
                />
                <Button type="submit" variant="contained">Go</Button>
            </form>
        </Box>
    );
};

export default VideoPlayer;
