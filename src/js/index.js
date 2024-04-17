/*
Objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que etão escondidos no html

Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

Passo 2 - indenficar o clique no botão 

Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais
Passo 1 - pegar o botão e esconder ele
*/

//Objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que etão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();
/*Objetivo 2 - esconder o botão de mostrar mais*//*Passo 1 - pegar o botão e esconder ele
*/
    esconderBotao();


})/*addEventListener adicionar um evento de escuta*//*funçao de seta () => {}*/

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

