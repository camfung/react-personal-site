import React, { useState } from 'react';
import "../../global_components/backgroundcolors.css"
import "../../pages/blog/Card.css"

function Comment(props) {
  // const [randomNumber, setRandomNumber] = useState(0);
  
  // function getRandomNumber() {
  //   setRandomNumber(Math.floor(Math.random() * 1000));
  // };

  // const randomImageId = getRandomNumber();

  return (
    <div class="card">
      {/* <img src={`https://picsum.photos/id/${randomImageId}/200`} alt={`Random image ${randomImageId}`}></img> */}
      
      <div class="card-body">
        <p class="card-title">{props.userName}</p>
        <p class="card-text">{props.message}</p>
      </div>

    </div>
  );
}

export default Comment;
