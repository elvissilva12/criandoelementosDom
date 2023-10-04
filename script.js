/// Utilizando o metódo simples no exercício:

let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Livros de Programação";

let produtoA = document.createElement("div");

let nome = document.createElement("h2");
nome.innerText = "Lógica de Programação e Algoritmos com JavaScript";

let imagem = document.createElement("img");
imagem.src = "https://m.media-amazon.com/images/I/71X7hMhMEUL._SL1500_.jpg";
imagem.height = "710";
imagem.width = "533";

let descricao = document.createElement("p");
descricao.innerText = "Os conteúdos abordados em Lógica de Programação e Algoritmos são fundamentais a todos aqueles que desejam ingressar no universo da Programação de Computadores, esses conteúdos, no geral, impõem algumas dificuldades aos iniciantes, o autor utiliza sua experiência de mais de 15 anos em lecionar a disciplina de Algoritmos em cursos de graduação, para trabalhar o assunto passo a passo";

let preco = document.createElement("span");
preco.innerText = "Valor: RS 83,75";

const elementoBody = document.querySelector("body");

elementoBody.appendChild(titulo);
elementoBody.appendChild(produtoA);
produtoA.appendChild(nome);
produtoA.appendChild(imagem);
produtoA.appendChild(descricao);
produtoA.appendChild(preco);

/// Utilizando o metódo complexo no exercício:

let produtoB = document.createElement("div");
produtoB.innerHTML = `
    <h2>JavaScript: O Guia Definitivo</h2>
    <img src="https://m.media-amazon.com/images/I/91imwEiwxBL._SL1500_.jpg" height="710" width="533"> 
    <p>JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript,
        e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – 
        incluem interpretadores JavaScript. Isso a torna uma das linguagens de programação mais 
        importantes atualmente e uma das tecnologias que todo desenvolvedor Web deve conhecer.</p>
    <span>Valor: R$ 187,20</span>
`;
elementoBody.appendChild(produtoB);