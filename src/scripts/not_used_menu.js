
export function initMenu() {
    const menu = document.querySelector('.menu');

    const fragment = document.createDocumentFragment();
    const lists = ['HOME','PHOTOAPP','DESIGN','DOWNLOAD'];
    lists.forEach(elementMenu => {
        const newLi = document.createElement('li');
        newLi.className = 'menu_item';
        const newA = document.createElement('a');
        newA.classList.add('menu_link');
        newA.textContent = elementMenu;
        if (elementMenu='HOME') {
            newA.href = 'https://www.google.com.ua/search?q=JS';              
        };
        newLi.appendChild(newA);
        fragment.appendChild(newLi);
    });


    menu.appendChild(fragment);

    menu.addEventListener('click', (event) => {
        console.log('You choose',event.target.innerText);
    });

    //burger
    const menuBurger = document.querySelector('.burger');
    const fragmentBurger = document.createDocumentFragment();
    for (let index = 0; index < 3; index++) {
        const newDiv = document.createElement('span');
        // const newDiv = document.createElement('div');
        newDiv.className='burger__bar';
        // newDiv.textContent='___';
        // newDiv.style.height= '5px';
        // newDiv.style.width= '20px';
        // newDiv.style.margin= '5px auto';
        // newDiv.style.backgroundColor= '#000';        
        fragmentBurger.appendChild(newDiv);
    };
    menuBurger.appendChild(fragmentBurger);
    menuBurger.addEventListener('click', (event) => {
                
    });
};

export function Burger() {

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        burger = document.querySelector('.burger');

        burger.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                burger.classList.toggle('burger_active');
                menu.classList.toggle('menu_active');
            })
        })
    });
    
};
