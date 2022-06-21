import React from 'react';


function ToDoItem(props){


    return (
        <li key={props.index} >{props.name}</li>
    );}


export default ToDoItem;