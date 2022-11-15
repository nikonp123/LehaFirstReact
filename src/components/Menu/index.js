import React, { useEffect, useState } from 'react';
import Burger from './Burger';
import Item from "./Item";

function Menu(props) {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isActiveBurger, setIsActiveBurger] = useState(false);

    const handlerClickMenu = event => {
        console.log('You choose',event.target.innerText);    
        // setIsActiveMenu(current => !current);
    };

    const handlerClickBurger = event => {
        setIsActiveMenu(current => !current);
        setIsActiveBurger(current => !current);
    };

    
    const lists = ['HOME','PHOTOAPP','DESIGN','DOWNLOAD'];
    const lineBurger = new Array(3).fill('').map((_,i) => (i+1));
    // const lineBurger = [1,2,3];

    return (
        <nav>
            <div className='container-menu'>
                <div className= {isActiveBurger ? 'burger burger_active' : 'burger'} onClick={handlerClickBurger}>
                    {lineBurger.map(el => <Burger key={el} />  )}
                </div>
                <ul className={isActiveMenu ? 'menu menu_active' : 'menu'} onClick={handlerClickMenu} >
                    {lists.map((elementMenu,index) => <Item key={index} el={elementMenu}/> )}    
                </ul>
            </div>
        </nav>
    );
}

export default Menu;