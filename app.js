const button = document.querySelector('button');
const img = document.querySelector('img');

button.addEventListener('click', ()=> {
    img.src = `img/${Math.floor(Math.random() * 6) + 1}.svg`;
    let soundEffect = new Audio('soundEffect.m4a');
    soundEffect.play();
})