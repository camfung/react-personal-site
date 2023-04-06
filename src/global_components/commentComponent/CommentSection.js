import React from 'react';
import "../backgroundcolors.css"
import NavBar from '../NavBar';
import EnterComment from './EnterComment';
import DisplayComments from './DisplayComments';
import CommentHeader from './CommentHeader';
function CommentSection(props) {


  return (
    <div class="wrapper">
        <CommentHeader page={props.page}></CommentHeader>
        <DisplayComments page={props.page}></DisplayComments>
        <EnterComment page={props.page}></EnterComment>
    </div>
  );
}

export default CommentSection;
