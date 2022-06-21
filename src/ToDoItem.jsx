import React from 'react';


function ToDoItem(props){


    return (
        <div onClick={props.onClick}>
     <li key={props.id} id={props.id} >{props.name}</li>
        </div>
    );}


export default ToDoItem;