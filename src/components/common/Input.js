import React from 'react';

function Input({nameLabel,typeInput,classNameInput,placeholderInput}) {
    return (
        <label> {nameLabel}> 
            <input type={typeInput} className={classNameInput} placeholder={placeholderInput}/>
        </label>
);
}

export default Input;