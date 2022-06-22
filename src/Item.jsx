import React from 'react';

function Item(props) {

    const [item, changeItem] = React.useState("");

    function handleSubmit(event) {
        changeItem(event.target.value);
    }

    return (<div className='form'>
        <input type="text" onChange={handleSubmit} value={item} id="name"></input>
        <button onClick={(prev) => {
            props.addItems(item);
            changeItem("");
        }
        }>Add</button>
    </div>)
};
export default Item;