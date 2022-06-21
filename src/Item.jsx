import React from 'react';
import ToDoItem from './ToDoItem';

function Item() {


    const [item, changeItem] = React.useState({
        name: ""
    });
    const [items, addItems] = React.useState([]);

    function handleSubmit(event) {
        changeItem({ name: event.target.value})
    }

    function addItem(event) {

        addItems(prev=>{
            return[...prev,item];
        });
        changeItem({ name: ""})
       

        event.preventDefault();
    }

    return (<div className='form'>
        <form onSubmit={addItem}>
            <input type="text" onChange={handleSubmit} value={item.name} id="name"></input>
            <button type="submit" >Add</button>
       
        <ul>
        {items.map((value,index)=><ToDoItem
         key={index}
         name={value.name} />
      )}
        </ul>
        </form>
    </div>)
};
export default Item;