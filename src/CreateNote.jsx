import React from 'react';

function CreateNote(props) {

    const[note,changeNote]=React.useState({
        title:"",
        content:""
    })

    function changeInput(event){
       // {event.target.name==="title" ? changeNote({title:event.target.value,body:note.body}) : console.log("bua")}
        changeNote((prev)=>{
            
            return {...prev,[event.target.name]:event.target.value}
        });
    }
   function saveNote(event){
    props.saveNote(note);
    changeNote({title:"", content:""});
    event.preventDefault();
   }
    return (
        <form className='create-note'>
            <input onChange={changeInput} name="title" placeholder='Title' value={note.title}/>
            <textarea onChange={changeInput} name="content" placeholder="Take a text..." value={note.content} rows="3"></textarea>
            <button onClick={saveNote}>ok</button>
        </form>

   )
};
export default CreateNote;