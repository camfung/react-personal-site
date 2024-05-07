import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Button from '../../global_components/Button';
import Counter from './counter';

function MediaCard({ episode, updateEpisode }) {
    const [url, setUrl] = useState("");
    const [seasonNumber, setSeasonNumber] = useState(parseInt(episode.seasonNumber));
    const [episodeNumber, setEpisodeNumber] = useState(parseInt(episode.episodeNumber));

    useEffect(() => {
        if (episode) {
            const baseUrl = "https://vidsrc.xyz/embed";
            const path = episode.idType === "movie" ? "movie" : "tv";
            let constructedUrl = `${baseUrl}/${path}/${episode.imdbId}/`;
            if (path == "tv") {
                constructedUrl += `${seasonNumber}-${episodeNumber}`;
            }

            setUrl(constructedUrl);
        }
    }, [episode, seasonNumber, episodeNumber]);

    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {episode.title}
                </Typography>
                {episode.idType !== "movie" && (
                    <Typography color="text.secondary">
                        Season: {seasonNumber}, Episode: {episodeNumber}
                    </Typography>
                )}
                <Typography variant="body2">
                    ID: {episode.id} (Type: {episode.idType})
                </Typography>
                <Typography variant="body2">
                    Show: {episode.isShow ? "Yes" : "No"}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                    <Button onClick={() => {
                        updateEpisode(episode.id, { seasonNumber: seasonNumber, episodeNumber: episodeNumber })
                        openNewTab(url)
                    }} text="Watch" />
                </Box>
                {
                    episode.idType !== "movie" && (
                        <>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Typography variant="body2">Season:</Typography>
                                <Counter count={seasonNumber} setCount={setSeasonNumber} />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                <Typography variant="body2">Episode:</Typography>
                                <Counter count={episodeNumber} setCount={setEpisodeNumber} />
                            </Box>
                        </>
                    )
                }

            </CardContent>
        </Card>
    );
}

export default MediaCard;
