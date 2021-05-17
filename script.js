// A variável abaixo seleciona o botão
const btnMobile = document.getElementById('btn-mobile');
//Criando função, que vai selecionar a navegação e adicionar uma classe nela "active"
function toggleMenu(event) {
    if (event.type ==="touchstart") event.preventDefault();
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
}
// Função que é ativada ao clicar em cima dele, nome da função
btnMobile.addEventListener('click' , toggleMenu)
btnMobile.addEventListener('touchstart' , toggleMenu)