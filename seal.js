let seal = document.querySelector(".baby-seal-image");
const sealSound = new Audio('seal.mp3');

seal.addEventListener('click',()=> {
    sealSound.play();
    }
)