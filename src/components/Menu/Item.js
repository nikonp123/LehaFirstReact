import React, {useState} from 'react';

function Item(props) {



    return (
        <li className = 'menu_item' >
            <a className='menu_link' href="#">{props.el}</a>
        </li>
    );
}

export default Item;