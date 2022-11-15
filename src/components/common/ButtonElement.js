import React from 'react';

function ButtonElement({classNameProps,dataAtr,dataAtrValue,typeBtn,onClickProps,name,imgName}) {
    
    const classNameBtn = 'button '+classNameProps;
    const dataAttr = {[dataAtr]: dataAtrValue};

    return (
        <button {...dataAttr} type={typeBtn} className={classNameBtn} onClick={onClickProps}>
            {name}
            {imgName ? <img src={imgName} alt="up.svg" /> : "" }
        </button>    
    );
    
}

export default ButtonElement;