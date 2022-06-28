import React from 'react';
import Note from './Note';
import CreateNote from './CreateNote';

function App(){

    const[notes,setNotes]=React.useState([]);
    
    function saveNote(event){
        setNotes((prev)=>{
            console.log(event);
            return [...prev,event];
         });
         
    };

    function deleteNote(event){
        setNotes((prev)=>{
            return notes.filter((note,index)=>{
                return index!==event;
            });
        })
   
    }
    return <div>
       <header><h1>Organize your day</h1></header>
       <CreateNote
       saveNote={saveNote} />
       {notes.map((value,index)=>{
        return <Note 
            note={value}
            key={index}
            id={index}
            deleteNote={deleteNote}
        />
       })

       }
       <footer><p>{new Date().getFullYear()}</p></footer>
    </div>
};
export default App;