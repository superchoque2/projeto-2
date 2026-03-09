const MobileBtn = document.querySelector('.menu-btn');
const link = document.getElementById('nav-links');
const ativo = document.querySelectorAll('.produto')
let troca = 0


MobileBtn.addEventListener('click', () => {
    link.classList.toggle('ativo');
})

function TrocaDeProduto() {
    ativo[troca].classList.remove('ativoimg')

    troca++
    if (
        troca >= ativo.length) {
        troca = 0;

    }
    ativo[troca].classList.add('ativoimg')


}

setInterval(TrocaDeProduto, 4000);



