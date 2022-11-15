import React from 'react';
import Container from '../Container';
import heart from '../../icons/heart.png';
import './style.scss'

function index(props) {

    const srcFrame = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40642.98786357379!2d30.324250459671024!3d50.45624718854292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc904f159a6b%3A0xe273a985710ff3df!2z0JbQuNGC0L7QvNC40YDRgdC60LDRjw!5e0!3m2!1sru!2sua!4v1666246971014!5m2!1sru!2sua";


    return (
        <footer className='footer'>
            <Container>
                <img src={heart} alt="heart" className="footer__icon footer__icon_animated" />
                <p className='footer__text' >Copyright by phototime - all right reserved</p>
                <div className="footer__map">
                    <iframe src={srcFrame} width="916" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </footer>
    );
}

export default index;