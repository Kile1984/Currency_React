import React from 'react';
import './Header.css';

function Header({base, date }) {

    var newDate = new Date(date);
    var day = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();

    return (
        <div className="jumbotron rounded-0">
            <h1>Base: <span>{base}</span>, Date: <span>{`${day}.${month + 1}.${year}`}</span></h1>
        </div>
    );
}


export default Header;