import React from 'react';

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
        {items.map(value=><li key={value.key}>{value.name}</li>)}
        </ul>
    </div>)
};
export default Item;