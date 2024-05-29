import FireIconButton from '../../global_components/FireIconButton.jsx';
import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import Button from '../../global_components/Button.jsx';
import Counter from './counter';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { CardMembershipOutlined } from '@mui/icons-material';

function MediaCard({ episode, updateEpisode: updateDocument, deleteDocument }) {
    const [url, setUrl] = useState("");
    const [seasonNumber, setSeasonNumber] = useState(parseInt(episode.seasonNumber));
    const [episodeNumber, setEpisodeNumber] = useState(parseInt(episode.episodeNumber));
    const cardSize = "350px"

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
    const fetchImageUrl = async (title) => {
        try {
            const response = await axios.get('https://pdftts.azurewebsites.net/api/getImage', {
                params: { title }
            });
            return response.data;
        } catch (error) {
            console.error('Failed to fetch image URL:', error);
        }
    };
    const onIncrement = (type) => {
        if (type === 'season') {
            setSeasonNumber(seasonNumber + 1);
        } else {
            setEpisodeNumber(episodeNumber + 1);
        }
    }
    const onDecrement = (type) => {
        if (type === 'season') {
            setSeasonNumber(seasonNumber - 1);
        } else {
            setEpisodeNumber(episodeNumber - 1);
        }
    }

    const onWatch = () => {
        updateDocument(episode.id, { seasonNumber: seasonNumber, episodeNumber: episodeNumber, lastWatched: new Date() })
        openNewTab(url)
    }
    const test = () => {
        console.log(fetchImageUrl("anyone but you"))
    }

    return (
        <Card sx={{ height: cardSize / 3, width: cardSize, m: 2 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h5" component="div">
                        {episode.title}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>

                        <IconButton onClick={() => { deleteDocument(episode.id) }} aria-label="delete" style={{ color: 'red' }}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={onWatch} aria-label="delete" style={{ color: 'black' }}>
                            <PlayArrowIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                    {
                        episode.idType !== "movie" && (
                            <>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                                    <FireIconButton
                                        icon={<RemoveCircleOutlineIcon />}
                                        onClick={() => onDecrement('season')}
                                    />
                                    <Typography variant="body2">Season {seasonNumber}</Typography>
                                    <FireIconButton
                                        icon={<AddCircleOutlineIcon />}
                                        onClick={() => onIncrement('season')}
                                    />
                                    <FireIconButton
                                        icon={<RemoveCircleOutlineIcon />}
                                        onClick={() => onDecrement('episode')}
                                    />
                                    <Typography variant="body2">Episode {episodeNumber}</Typography>
                                    <FireIconButton
                                        icon={<AddCircleOutlineIcon />}
                                        onClick={() => onIncrement('episode')}
                                    />
                                </div>
                            </>
                        )
                    }

                </Box>
            </CardContent>
        </Card>
    );
}

export default MediaCard;
