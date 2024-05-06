import React from 'react';

const VideoEmbed = React.memo(() => {
    return (
        <div>
            <h1>Embedded Video</h1>
            <iframe
                src="https://vidsrc.xyz/embed/tv/tt0460649/4-13"
                width="800"
                height="450"
                allowFullScreen
            ></iframe>
        </div>
    );
});

export default VideoEmbed;
