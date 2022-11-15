import React from 'react';

function Overlay({children}) {
    return (
        <div className='overlay overlay_active'>
            {children}    
        </div>
    );
}

export default Overlay;