// mudança quando a pagina abaixa
const header = document.getElementById("header-aire");

const headerHeight = header.clientHeight;

window.onscroll = function () {

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
        header.style.transition = "background-color 0.5s ease";
        header.style.backgroundColor = "#983304ce";
        header.style.backdropFilter = "blur(5px)"
        header.style.borderBottomColor = "#983404"
    } else {
        header.classList.remove("scrolled");
        header.style.transition = "background-color 0.5s ease";
        header.style.backgroundColor = "";
        header.style.backdropFilter = "blur(0px)"
        header.style.borderBottomColor = "#dac894"
    }
};

//splide slider code 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 4,
        autoScroll: {
        speed: 1, 
        },
    }).mount( window.splide.Extensions);
});

//botão do navbar responsivo mobile
const menuButton = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header-menu');
  
menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
});
