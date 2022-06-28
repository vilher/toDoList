import React from 'react';

const today=new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function Header(){
    return (<div className='heading'>
    <h1>{weekday[today.getDay()]+", "+months[today.getMonth()]+" "+today.getDate()}</h1>
</div>)
};

export default Header;