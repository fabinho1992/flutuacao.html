const botao = document.querySelector('.botao');

botao.addEventListener('click', ()=>{
    const img = document.querySelector('img');

    img.classList.toggle('hide');
})