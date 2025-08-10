# Challenge-Amigo-Secreto

![Logo da Alura](https://www.alura.com.br/assets/img/alura-logo.svg) ![logoone](assets/ONE.png)

Neste desafio, desenvolvemos uma aplicação que permite aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

O usuário adiciona nomes por meio de um campo de texto e um botão "Adicionar". Os nomes inseridos aparecem em uma lista visível na página. Ao finalizar, o botão "Sortear Amigo" seleciona um nome aleatório e exibe o resultado na tela.

Este desafio tem o objetivo de desenvolver lógica de programação usando funções básicas, como if/else, arrays e loops com for.

---

## Funcionalidades

- Adicionar nomes: usuários escrevem o nome de um amigo e adicionam à lista clicando em "Adicionar".
- Validar entrada: se o campo estiver vazio, exibe um alerta pedindo um nome válido.
- Visualizar lista: os nomes aparecem abaixo do campo de entrada.
- Sorteio aleatório: ao clicar em "Sortear Amigo", um nome da lista é escolhido e exibido.


### Demonstração

 
> ![vídeo demonstrativo](assets/video.gif)

---

## Instalação
 
1. Clone o repositório:

```bash
git clone https://github.com/RobertoPereiraF/Challenge-Amigo-Secreto.git
```

2. Acesse a pasta do projeto:

```bash
cd Challenge-Amigo-Secreto
```


## Dependências 

* Navegador moderno compatível com JavaScript ES6+
* (Opcional) Node.js para execução local via servidor de desenvolvimento

## Como executar o projeto

Como se trata de um projeto HTML/JS simples, basta abrir o arquivo index.html no navegador.
Caso utilize Node.js ou um servidor local:

```bash
npm start
```
Em seguida, acesse no navegador:

```bash
http://localhost:3000
```
## Possíveis problemas e soluções

* Erro ao rodar npm install

    Certifique-se de que o Node.js está instalado corretamente.

* O sorteio não funciona
    
    Verifique se ao menos um nome foi adicionado antes de clicar em "Sortear Amigo".


## Contribuição

Se quiser contribuir com melhorias:

1. Faça um fork do repositório.

2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```
3. Faça commit das alterações:

```bash
git commit -m "Descrição da alteração"
```
4. Envie para seu fork:

```bash
git push origin minha-feature
```
5. Abra um pull request neste repositório.

## Licença

Este projeto é open source e está disponível sob a licença MIT.
