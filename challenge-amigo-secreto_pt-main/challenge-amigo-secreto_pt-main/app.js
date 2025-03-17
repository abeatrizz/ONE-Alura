// Array para armazenar os nomes dos amigos
let amigos = [];

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
