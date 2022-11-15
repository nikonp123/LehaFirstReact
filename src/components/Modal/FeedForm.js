import React from 'react';
import ButtonElement from '../common/ButtonElement';
import Input from '../common/Input';

function FeedForm({openModal,onTextAdd}) {

    const handleClickBtn = e => {
        e.preventDefault();
        let currentValue=e.target.form[0].value;
        console.log('Is under development');
        // console.log('You write ',e);
        console.log('You write ',currentValue);
        onTextAdd(currentValue);
        openModal(false);
    };

    return (
        <form action='#' className='feed-form'>
            <Input nameLabel='What do you want:' typeInput='text' classNameInput='what-write' placeholderInput='what' />

            <ButtonElement 
                classNameProps='button button_submit'
                name = 'Get started' typeBtn='submit'
                dataAtr='data-modal' dataAtrValue='what' dataBtnName='poke here1' 
                onClickProps={handleClickBtn}
            /> 
        </form> 
    );
}

export default FeedForm;