(() => {
  let amigos = [];
  let amigosRestantes = [];
  let jogoFinalizado = false;

  const campoInput = document.getElementById('amigo');
  const listaAmigos = document.getElementById('listaAmigos');
  const resultado = document.getElementById('resultado');
  const botaoSortear = document.querySelector(".button-draw");

  const iconeSortear = '<img src="assets/play_circle_outline.png" alt="Ícone para sortear">';
  const iconeReiniciar = '<img src="assets/restart_icon.svg" alt="Ícone para reiniciar">';
  const textoSortear = `${iconeSortear} Sortear amigo`;
  const textoReiniciar = `${iconeReiniciar} Reiniciar jogo`;

  function atualizarBotao(texto) {
    botaoSortear.innerHTML = texto;
  }

  function atualizarLista() {
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
      const li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });

    amigosRestantes = [...amigos];
    jogoFinalizado = false;
    atualizarBotao(textoSortear);
    resultado.innerHTML = '';
  }

  function adicionarAmigo() {
    const nome = campoInput.value.trim();

    if (!nome) {
      alert("Por favor, digite um nome.");
      return;
    }

    amigos.push(nome);
    atualizarLista();
    campoInput.value = '';
    campoInput.focus();
  }

  function reiniciarJogo() {
    amigos = [];
    amigosRestantes = [];
    jogoFinalizado = false;

    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    atualizarBotao(textoSortear);

    alert("O jogo foi reiniciado! Adicione novos amigos para jogar novamente.");
  }

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há nomes na lista! Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  if (jogoFinalizado) {
    reiniciarJogo();
    return;
  }

  if (amigosRestantes.length === 0) {
    alert("Todos os amigos já foram sorteados!");
    jogoFinalizado = true;
    atualizarBotao(textoReiniciar);
    return;
  }

  const indicePessoa = amigos.length - amigosRestantes.length;

  let indiceSorteado, amigoSorteado;

  do {
    indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
    amigoSorteado = amigosRestantes[indiceSorteado];
  } while (amigoSorteado === amigos[indicePessoa] && amigosRestantes.length > 1);

  amigosRestantes.splice(indiceSorteado, 1);

  const li = document.createElement('li');
  li.textContent = `${amigos[indicePessoa]} tirou: ${amigoSorteado}`;
  resultado.appendChild(li);
}

  window.adicionarAmigo = adicionarAmigo;
  window.sortearAmigo = sortearAmigo;
})();

const iconeReiniciar = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#f1f6f7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-restart" viewBox="0 0 24 24">
  <polyline points="1 4 1 10 7 10"/>
  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
</svg>`;
