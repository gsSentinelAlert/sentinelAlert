pergunta: "qual código css devo adicionar para ter rolagem suave e evitar que as seções fiquem escondidas atrás do menu?"

resposta: 
html{scroll-behavior: smooth;}
section{scroll-margin-top: 120px;}

alterações: não foi feita nenhuma alteração
---------------------------------------------------
pergunta: "crie uma paleta de cores css para um site de monitoramento de desastres naturais com tema tecnológico, fundo escuro e destaque em azul"

resposta:
--bg-color: #07111f;
--secondary-bg: #101c2e;
--card-color: #16263d;
--primary-color: #2ea8ff;
--secondary-color: #67c7ff;
--blue-color: #2ea8ff;
--blue-secondary: #67c7ff;
--green-color: #38d66b;
--green-secondary: #14a83e;
--red-color: #ff4d4d;
--red-secondary: #d91c1c;
--text-color: #ffffff;
--text-secondary: #b7c4d6;
--border-color: #223754;
--shadow-color: rgba(0,0,0,0.4);

alterações: adicionei dentro do :root
--------------------------------------------------------
pergunta: "como criar um slideshow automático em javascript usando várias imagens?"

resposta: 
Crie um array constante chamado slideImages contendo os caminhos das imagens que serão exibidas no slideshow.
Código sugerido:
const slideImages = [
'./src/assets/slide1.png',
'./src/assets/slide2.png',
'./src/assets/slide3.png'
];

alterações: substitui os nomes das imagens por "foto1", "foto2" e "foto3"
-------------------------------------------------------
pergunta: "como faço para trocar automaticamente as imagens de um slideshow em javascript?"

resposta: Após criar o array com as imagens, você pode criar uma função responsável por avançar para a próxima imagem. A função deve:

Selecionar o elemento <img> do slideshow.
Incrementar o índice da imagem atual.
Verificar se chegou ao final da lista de imagens.
Retornar para a primeira imagem quando necessário.
Atualizar o atributo src da imagem exibida.

Exemplo sugerido:

const slide = document.getElementById("slideshow");

function trocarImagem() {
    imagemAtual++;

    if (imagemAtual >= slideImages.length) {
        imagemAtual = 0;
    }

    slide.src = slideImages[imagemAtual];
}

alterações: substituí a condição sugerida pela IA por uma verificação baseada na quantidade de imagens que foi usada no projeto e adaptei os nomes das variáveis para o nome que eu tinha escolhido.
----------------------------------------------------
pergunta: "qual link eu uso para adicionar fontes personalizadas do Google Fonts e ícones do Font Awesome ao meu projeto html?"

resposta:
GOOGLE FONTS
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
ÍCONES
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

alterações: não foi feita nenhuma alteração