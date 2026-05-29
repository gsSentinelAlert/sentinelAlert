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

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    if(nome == "" || email == "" || mensagem == ""){
        alert("Preencha todos os campos.");
    } else {
        alert("Formulário enviado com sucesso!");
        formulario.reset();
    }
});
const quiz = document.getElementById("quiz-form");

quiz.addEventListener("submit", function(evento){
    evento.preventDefault();
    let pontos = 0;

    // PERGUNTA 1
    if(document.getElementById("q1").value.toLowerCase() == "nasa"){
        pontos++;
    }
    // PERGUNTA 2
    const resposta2 = document.getElementById("q2").value.toLowerCase();
    if(resposta2 == "enchentes" || resposta2 == "alagamentos"){
        pontos++;
    }
    // PERGUNTA 3
    if(document.getElementById("q3").value.toLowerCase() == "sim"){
        pontos++;
    }
    // PERGUNTA 4
    if(document.getElementById("q4").value.toLowerCase() == "inpe"){
        pontos++;
    }
    // PERGUNTA 5
    if(document.getElementById("q5").value.toLowerCase() == "sim"){
        pontos++;
    }
    // PERGUNTA 6
    if(document.getElementById("q6").value.toLowerCase() == "sim"){
        pontos++;
    }
    // PERGUNTA 7
    if(document.getElementById("q7").value.toLowerCase() == "sim"){
        pontos++;
    }
    // PERGUNTA 8
    if(document.getElementById("q8").value.toLowerCase() == "sim"){
        pontos++;
    }
    // PERGUNTA 9
    if(document.getElementById("q9").value.toLowerCase() == "sim"){
        pontos++;
    }
    // PERGUNTA 10
    if(document.getElementById("q10").value.toLowerCase() == "sim"){
        pontos++;
    }
    // RESULTADO
    const resultado = document.getElementById("resultado");
    resultado.innerHTML =
        "Você acertou " + pontos + " de 10 perguntas.";
    });
