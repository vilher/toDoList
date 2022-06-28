import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
function CreateNote(props) {

    const [isExpended, setExpanded]=React.useState(false);

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
    function expend(){
        setExpanded(true);
    }
   function saveNote(event){
    props.saveNote(note);
    changeNote({title:"", content:""});
    event.preventDefault();
   }
    return (
<form className='create-note'>
           {isExpended &&<input onChange={changeInput} name="title" placeholder='Title' value={note.title}/>}
            <textarea onClick={expend} onChange={changeInput} name="content" placeholder="Take a text..." value={note.content} rows={isExpended?"3":"1"}></textarea>
            <button onClick={saveNote}><AddIcon /></button>
           
        </form>
        
   )
};
export default CreateNote;