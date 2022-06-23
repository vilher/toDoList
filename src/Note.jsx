import React from 'react';
import Button from '@mui/material/Button';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Zoom from '@mui/material/Zoom';
function Note(props){

    function deleteNote(event){
        console.log(props.id);
        props.deleteNote(props.id);
        event.preventDefault();
    }
    const{title,content}=props.note;
    return <form className='note'>
     <h1>{title}</h1>
     <p>{content}</p>
    <Button onClick={deleteNote} ><ClearOutlinedIcon /></Button>
    </form>

};
export default Note;