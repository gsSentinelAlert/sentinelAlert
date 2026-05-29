const slideImages = [
    './src/assets/foto1.png',
    './src/assets/foto2.png',
    './src/assets/foto3.png'
];
let imagemAtual = 0;
const slide = document.getElementById("slideshow");
function trocarImagem(){
    imagemAtual++;
    if(imagemAtual > 2){
        imagemAtual = 0;
    }
    slide.src = slideImages[imagemAtual];
}
setInterval(trocarImagem, 3000);