import React, { useEffect, useState } from 'react';
import Overlay from '../common/Overlay';
import Button from './Button';
import Close from './Close';
import FeedForm from './FeedForm';

function Modal({openModal,onTextAdd}) {

    return (
        <Overlay>
            <Button />
            <div className='modal modal_active'>
                <Close openModal={openModal}/>
                <FeedForm onTextAdd={onTextAdd} openModal={openModal}/>
            </div>
        </Overlay>
    );
}

export default Modal;