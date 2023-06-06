import React from 'react';

const ImagePage = ({ imageSrc, artistName, description }) => {

    const ImageDisplay = ({ base64String, altText }) => {
        return <img src={`${base64String}`} alt={altText} className='card-image'/>;
      };

  return (
    <div className="square">
        <h2 className="title" >{description}</h2>
      <ImageDisplay base64String={imageSrc} altText={"test"}></ImageDisplay>
      <div className="card-content">
        <h3 className="artist-name">Drawn by: {artistName}</h3>
      </div>
    </div>
  );
};

export default ImagePage;
