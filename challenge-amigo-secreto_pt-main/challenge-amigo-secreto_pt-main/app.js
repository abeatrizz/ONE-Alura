// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo ao array e à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById("nome"); // Pega o campo de entrada
    const nome = nomeInput.value.trim(); // Remove espaços extras no início e fim

    // Valida se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe alerta caso o nome seja vazio
    } else {
        amigos.push(nome); // Adiciona o nome ao array de amigos
        nomeInput.value = ""; // Limpa o campo de entrada após adicionar
        atualizarLista(); // Atualiza a lista exibida na tela
    }
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const listaNomes = document.getElementById("lista-nomes"); // Pega o elemento da lista
    listaNomes.innerHTML = ""; // Limpa a lista antes de adicionar os novos nomes

    // Percorre o array de amigos e cria um item de lista <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Cria um item de lista
        li.textContent = amigos[i]; // Define o texto do item da lista como o nome
        listaNomes.appendChild(li); // Adiciona o item à lista na tela
    }
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    // Verifica se o array 'amigos' não está vazio
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio!"); // Exibe alerta se o array estiver vazio
        return; // Interrompe o sorteio se não houver amigos
    }

    // Gera um índice aleatório entre 0 e o tamanho do array 'amigos' - 1
    const indexAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado usando o índice aleatório
    const amigoSorteado = amigos[indexAleatorio];

    // Atualiza o conteúdo do elemento de resultado com o nome sorteado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></h2>`;
}

// Garantir que o evento de clique seja associado ao botão após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const botaoAdicionar = document.getElementById("addButton");
    botaoAdicionar.addEventListener('click', adicionarAmigo);
});
