import React from 'react';

function Note(props){


    function deleteNote(event){
        props.deleteNote(event.target.id);
        event.preventDefault();
    }
    const{title,content}=props.note;

    return <div className='note'>
    <form onClick={deleteNote} >
    <h1>{title}</h1>
    <p>{content}</p>
    <button id={props.id} type='submit'  >Delete</button>
    </form>
    </div>
};
export default Note;