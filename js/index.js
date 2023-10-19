const d = document
const menu_links = d.querySelector('.menu__links');

d.addEventListener('click', (e) => {
    if(e.target.matches('.menu__open *') ){
        menu_links.classList.add('active')
    }
    if(e.target.matches('.menu__close *') ){
        menu_links.classList.remove('active');
    }
    if(e.target.matches('.overlay') ){
        menu_links.classList.remove('active');
    }
    if(e.target.matches('.links__item *') ){
        menu_links.classList.remove('active');
    }
})