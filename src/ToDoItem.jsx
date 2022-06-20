import React from 'react';


function ToDoItem(props){

    const[style, setStyle]=React.useState(false);

    function crossItem(){
        setStyle(prev=>{
            return !prev;
        })
       
    }

    console.log(props.id);
    return (
        <li style={{ textDecoration: style ? "line-through": "none" }} key={props.id} onClick={crossItem}>{props.name} </li>
    );}


export default ToDoItem;