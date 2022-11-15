export function initVisibleElements() {
    let more50pxl;
    if (window.scrollY > 50) {
        more50pxl=true;
    } else {
        more50pxl=false;
    };
    return more50pxl;
};


export function smoothScroll() {
    
    window.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('scroll', () => {
            initVisibleElements();
        });        
    });
};
