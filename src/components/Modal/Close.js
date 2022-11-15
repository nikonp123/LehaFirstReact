import React from 'react';

function Close({openModal}) {
    return (
        <div className='modal__close' onClick={() => openModal(false)}>X</div>
    );
}

export default Close;