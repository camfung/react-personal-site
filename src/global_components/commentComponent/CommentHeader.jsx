import React, { useState } from 'react';
import "../../global_components/backgroundcolors.css"
import "../../pages/blog/Card.css"

function CommentHeader(props) {
    if (props.page != "MessageBoard") {
        return <h1>Comments</h1>
    } 
    return null; 
}

export default CommentHeader;
