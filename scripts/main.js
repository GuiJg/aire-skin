// Seleciona o header pelo ID
const header = document.getElementById("header-aire");

// Obter a altura do header
const headerHeight = header.clientHeight;

// Adiciona um evento de rolagem à janela
window.onscroll = function () {
    // Verifica a posição de rolagem da página
    if (window.scrollY > 0) {
        // Se estiver abaixo do topo, esconde .header-menu e .div-header
        header.classList.add("scrolled");
        header.style.transition = "background-color 0.5s ease";
        header.style.backgroundColor = "#983304ce";
        header.style.backdropFilter = "blur(5px)"
        document.querySelector('.input').style.borderBottomColor = '#dac894';
    } else {
        // Se estiver no topo, mostra .header-menu e .div-header
        header.classList.remove("scrolled");
        header.style.transition = "background-color 0.5s ease";
        header.style.backgroundColor = "";
        header.style.backdropFilter = "blur(0px)"
        document.querySelector('.input').style.borderBottomColor = '#983404';
    }
};