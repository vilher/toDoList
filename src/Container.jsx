import React from 'react';
import Header from './Header';
import Item from './Item';
import ToDoItem from './ToDoItem';

function Container(){
   
    const [items, addItems] = React.useState([]);

    function addItem(event) {

        console.log(event);
        addItems(prev=>{
            return[...prev,event];
        });
     
    }

    return <div className='container'>
        <Header />
        <Item 
            addItems={addItem}
        />
         <ul>
        {items.map((value,index)=><ToDoItem 
           id={index}
           key={index}
            name={value}
        />)}
        </ul>
    </div>
};
export default Container;