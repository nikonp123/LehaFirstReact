import React, {useState} from 'react';
import Modal from '../Modal';
import ButtonElement from '../common/ButtonElement';

function Button(props) {

    const [isModalActive,setIsModalActive] = useState(false);

    const handleClickBtn = e => {
        setIsModalActive(current => !current);
    };

    const getModalData = (p) => {
        alert(p);
    }

    return (
        <div className='context__btn'>
            <ButtonElement 
                classNameProps='button_get-startdet'
                name = 'Get started (from child to parent!!!)' typeBtn='text'
                dataAtr='data-modal' dataAtrValue='get-started' dataBtnName='get-started' 
                onClickProps={handleClickBtn}
                
            />   
            {isModalActive && <Modal onTextAdd={getModalData} openModal={setIsModalActive}/>}
        </div>
    );

}

export default Button;