// SLIDESHOW
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

const botoesTema = document.querySelectorAll(".theme-btn");

botoesTema.forEach(function(botao){
    botao.addEventListener("click", function(){
        const tema = botao.dataset.theme;
        if(tema == "blue"){
            document.documentElement.style.setProperty("--bg-color", "#07111f");
            document.documentElement.style.setProperty("--primary-color", "#2ea8ff");
        }
        if(tema == "green"){
            document.documentElement.style.setProperty("--bg-color", "#07150f");
            document.documentElement.style.setProperty("--primary-color", "#38d66b");
        }
        if(tema == "red"){
            document.documentElement.style.setProperty("--bg-color", "#1a0a0a");
            document.documentElement.style.setProperty("--primary-color", "#ff4d4d");
        }
    });
});