import React, { useEffect, useState, useCallback } from 'react';
import arrowPageUp from '../../icons/up.svg'
import ButtonElement from './ButtonElement';
import initVisibleElements from '../../scripts/scroll'


function Arrow() {
    // const [click,setClick] = useState(false);
    const [isVisible,setIsVisible] = useState(false);


    //от Лехи: нужен useCallback, чтобы при перерендеринге не происходило: удаление и заново создание 
    //обработчика onClick на кнопке
    const handleClickBtn = useCallback(() =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        // window.scrollTo(0, 0)
    },[]);

    // console.log('render');

    useEffect(() => {  
        const listenToScroll = () => {
            let heightToHideFrom = 150;

            if (window.scrollY < heightToHideFrom) {
                setIsVisible(false);
            } else  {
                setIsVisible(true);
            };  
                  
          };           
    
        window.addEventListener("scroll", listenToScroll);

        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, []);


    return (
        <div>
            {isVisible && <ButtonElement 
            classNameProps='page-up-smooth'
            name = '' typeBtn='text'
            imgName = {arrowPageUp}
            onClickProps={handleClickBtn}
            />}  
        </div>
    );
}

export default Arrow;