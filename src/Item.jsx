import React from 'react';
import ToDoItem from './ToDoItem';

function Item() {


    const [item, changeItem] = React.useState({
        name: "",
        key: 0
    });
    const [items, addItems] = React.useState([]);

    function handleSubmit(event) {
        changeItem({ name: event.target.value, key: item.key })
    }

    function addItem(event) {

        addItems(prev=>{
            return[...prev,item];
        });
        changeItem({ name: "", key: item.key + 1 })
       

        event.preventDefault();
    }
    return (<div className='form'>
        <form onSubmit={addItem}>
            <input type="text" onChange={handleSubmit} value={item.name} id="name"></input>
            <button type="submit" >Add</button>
        </form>
        <ul>
        {items.map(value=><ToDoItem 
            key={value.key}
            name={value.name}
        />)}
        </ul>
    </div>)
};
export default Item;