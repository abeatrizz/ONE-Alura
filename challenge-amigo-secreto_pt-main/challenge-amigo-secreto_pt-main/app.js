let amigos = [];

function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo");
  const nome = nomeInput.value.trim();

  if (nome) {
    amigos.push(nome);
    nomeInput.value = "";
    console.log(amigos);
  }
}

document.getElementById("addButton").addEventListener("click", adicionarAmigo);

function atualizarLista() {
    const listaNomes = document.getElementById("lista-nomes"); 
    listaNomes.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaNomes.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio!");
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indexAleatorio];

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></h2>`;
}

document.addEventListener('DOMContentLoaded', function() {
    const botaoAdicionar = document.getElementById("addButton");
    botaoAdicionar.addEventListener('click', adicionarAmigo);
});
