import React from 'react';
import Container from './Container';
import LoremPng from '../icons/Lorem.png';
import Menu from './Menu';


function Header(props) {
    return (
        <header id='up' className="header"> 
            <Container>
                <div className="header__logo">
                    <a href="#">
                        <img src={LoremPng} alt="lorem" />
                    </a>
                </div>
                <Menu />
            </Container>
        </header>
    );
}

export default Header;