import React, { useState } from 'react';
import "../../global_components/backgroundcolors.css"
import "../../pages/blog/Card.css"

function CommentCounter(props) {

    if (props.page != "MessageBoard") {
        return <p>{props.count} Comments</p>
    }

  return null; 
}

export default CommentCounter;
