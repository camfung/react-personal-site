import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function ShowCard({ title, season, episode, onWatch, onDelete, onIncrement, onDecrement }) {
    return (
        <Card sx={{ maxWidth: 345, position: 'relative', borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="140"
                image="/path/to/adventure-time-background.jpg"  // Replace with actual image path
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Season: {season}, Episode: {episode}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                    <IconButton onClick={() => onDecrement('season')}><RemoveCircleOutlineIcon /></IconButton>
                    <Typography variant="body2">Season {season}</Typography>
                    <IconButton onClick={() => onIncrement('season')}><AddCircleOutlineIcon /></IconButton>
                    <IconButton onClick={() => onDecrement('episode')}><RemoveCircleOutlineIcon /></IconButton>
                    <Typography variant="body2">Episode {episode}</Typography>
                    <IconButton onClick={() => onIncrement('episode')}><AddCircleOutlineIcon /></IconButton>
                </div>
                <Button startIcon={<PlayArrowIcon />} variant="contained" color="primary" onClick={onWatch}>
                    Watch Now
                </Button>
                <Button startIcon={<DeleteIcon />} variant="text" color="secondary" onClick={onDelete}>
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
}

export default ShowCard;
