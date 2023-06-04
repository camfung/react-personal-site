import React from 'react';

const Card = ({ imageSrc, artistName, description }) => {

    const ImageDisplay = ({ base64String, altText }) => {
        return <img src={`${base64String}`} alt={altText} className='card-image'/>;
      };

  return (
    <div className="card">
      <ImageDisplay base64String={imageSrc} altText={"test"}></ImageDisplay>
      <div className="card-content">
        <h3 className="artist-name">Draw by: {artistName}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
