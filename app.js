//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

(() => {
  // ======== Estado do jogo ========
  // Lista dos nomes adicionados
  let amigos = [];
  // Lista dos nomes que ainda não foram sorteados
  let amigosRestantes = [];
  // Flag que indica se o jogo terminou
  let jogoFinalizado = false;

  // ======== Referências aos elementos DOM ========
  const campoInput = document.getElementById('amigo');
  const listaAmigos = document.getElementById('listaAmigos');
  const resultado = document.getElementById('resultado');
  const botaoSortear = document.querySelector(".button-draw");

  // ======== Textos e ícones do botão ========
  const iconeSortear = '<img src="assets/play_circle_outline.png" alt="Ícone para sortear">';
  const iconeReiniciar = '<img src="assets/restart_icon.svg" alt="Ícone para reiniciar">';
  const textoSortear = `${iconeSortear} Sortear amigo`;
  const textoReiniciar = `${iconeReiniciar} Reiniciar jogo`;

  // ======== Função para atualizar o texto/ícone do botão ========
  function atualizarBotao(texto) {
    botaoSortear.innerHTML = texto;
  }

  // ======== Atualiza a lista visual dos amigos na tela ========
  function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Para cada amigo no array, cria um <li> e adiciona à lista
    amigos.forEach(amigo => {
      const li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });

    // Reseta o estado do sorteio para início
    amigosRestantes = [...amigos];
    jogoFinalizado = false;
    atualizarBotao(textoSortear); // Garante que o botão mostre "Sortear amigo"
    resultado.innerHTML = ''; // Limpa resultados anteriores
  }

  // ======== Adiciona um novo amigo à lista ========
  function adicionarAmigo() {
    const nome = campoInput.value.trim();

    // Validação para evitar nomes vazios
    if (!nome) {
      alert("Por favor, digite um nome.");
      return;
    }

    amigos.push(nome);   // Adiciona ao array de amigos
    atualizarLista();    // Atualiza a lista visual
    campoInput.value = ''; // Limpa campo de input
    campoInput.focus();    // Foca no campo para facilitar próximo input
  }

  // ======== Reinicia o jogo limpando todos os dados ========
  function reiniciarJogo() {
    amigos = [];
    amigosRestantes = [];
    jogoFinalizado = false;

    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    atualizarBotao(textoSortear);

    alert("O jogo foi reiniciado! Adicione novos amigos para jogar novamente.");
  }

  // ======== Sorteia um amigo aleatoriamente evitando auto-sorteio ========
  function sortearAmigo() {
    if (jogoFinalizado) {
      // Se o jogo acabou, o clique reinicia o jogo
      reiniciarJogo();
      return;
    }

    if (amigosRestantes.length === 0) {
      // Quando todos forem sorteados, exibe alerta e muda estado
      alert("Todos os amigos já foram sorteados!");
      jogoFinalizado = true;
      atualizarBotao(textoReiniciar);
      return;
    }

    // Índice da pessoa que vai sortear: primeira é 0, depois 1, etc.
    const indicePessoa = amigos.length - amigosRestantes.length;

    let indiceSorteado, amigoSorteado;

    // Garante que a pessoa não tire a si mesma
    do {
      indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
      amigoSorteado = amigosRestantes[indiceSorteado];
    } while (amigoSorteado === amigos[indicePessoa] && amigosRestantes.length > 1);

    // Remove o amigo sorteado da lista de disponíveis
    amigosRestantes.splice(indiceSorteado, 1);

    // Exibe o resultado do sorteio na tela
    const li = document.createElement('li');
    li.textContent = `${amigos[indicePessoa]} tirou: ${amigoSorteado}`;
    resultado.appendChild(li);
  }

  // ======== Expor as funções para serem chamadas pelo HTML ========
  window.adicionarAmigo = adicionarAmigo;
  window.sortearAmigo = sortearAmigo;
})();

const iconeReiniciar = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#f1f6f7ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-restart" viewBox="0 0 24 24">
  <polyline points="1 4 1 10 7 10"/>
  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
</svg>`;