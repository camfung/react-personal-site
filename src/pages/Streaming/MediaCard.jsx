import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Button from '../../global_components/Button';
import Counter from './counter';

function MediaCard({ episode }) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (episode) {
            const baseUrl = "https://vidsrc.xyz/embed";
            const path = episode.idType === "movie" ? "movie" : "tv";
            const constructedUrl = `${baseUrl}/${path}/${episode.id}/${episode.seasonNumber}-${episode.episodeNumber}`;
            setUrl(constructedUrl);
        }
    }, [episode]);

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
                        Season: {episode.seasonNumber}, Episode: {episode.episodeNumber}
                    </Typography>
                )}
                <Typography variant="body2">
                    ID: {episode.id} (Type: {episode.idType})
                </Typography>
                <Typography variant="body2">
                    Show: {episode.isShow ? "Yes" : "No"}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                    <Button onClick={() => openNewTab(url)} text="Watch" />
                    <Button text="Update" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Typography variant="body2">Season:</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="body2">Episode:</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default MediaCard;
