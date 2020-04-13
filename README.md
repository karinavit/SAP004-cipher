# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Sobre o Codex](#2-sobre-o-codex)
* [3. Definição do Projeto](#3-definiçao-do-projeto)
* [4. Instalação do Projeto](#4-instalação-do-projeto)
* [5. Seu feedback é importante!](#5-seu-feedback-é-importante)
* [6. Desenvolvido por](#6-desenvolvido-por)


***

## 1. Prefácio:
Este é o primeiro projeto desenvolvido individualmente pelas alunas da 4a Geração da Laboratoria Brasil (SAP004). 
O tema do projeto é de escolha da aluna  e o mesmo deve ser desenvolvido com  base na Cifra de César. 

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Sobre o Codex:
O Codex é voltado para o público que joga RPG - “Role-playing game”( para saber mais [clique aqui](https://pt.wikipedia.org/wiki/Role-playing_game)), onde os principais usuários são os jogadores e mestres de sessões de RPG. 
O Codex consiste em uma página que cifra e decifra mensagens com base na escolha de um deslocamento definido pelo usurário. A principal ideia é de o usuário trazer mais interatividade e diversão para as suas  sessões de jogo. Podendo ser aplicado em qualquer edição de diversos sistemas de RPG, como por exemplo:D&D, Vampire, Gurps, Changeling The Dreaming, entre outros. 


## 3. Definição do Projeto:

Este projeto teve dois princípios importantes (válidos para o design e código) durante seu desenvolvimento:
* manter a simplicidade, tanto de usabilidade para o usuário final , como no processo de desenvolvimento do código.
* aplicação dos conceitos e critérios de aceitação com o objetivo na aprendizagem da autora.

Esses princípios nortearam a escolha do tema e design de  tela única contendo:
* mensagem inicial de boas vindas;
* campo de instruções;
* box para inserir a mensagem (a ser cifrada ou decifrada);
* box para definir o deslocamento ( offset a partir de zero);
* botões de cifrar ou decifrar;
* campo para a exibição do resultado.
O projeto tem um design clean e intuitivo, acompanhado de instruções práticas para uso na mesma tela. 
Veja o resultado final [clicando aqui](https://karinavit.github.io/SAP004-cipher/)

## 4. Instalação do Projeto:
Se deseja instalar o projeto em sua máquina local, utilize as seguintes instruções:
* Use o Fork para criar um repositório em seu GitHub;
* Click em "clone or download" e copie o link;
* No terminal digite "git clone + link copiado" e dê enter;
* Verifique se tem o nodejs instalado, se não tiver, acesse esse [link](https://nodejs.org/) e faça a instalação, (isso inclui o [npm](https://docs.npmjs.com/));
* Digite no terminal "npm install" para instalar os pacotes necessários;
* Abra no seu editor de código e está pronto para ser utilizado ou alterado;

Comandos npm
* npm run test: irá testar seu código e verificar se está cumprindo com o desejado;
* npm run start: abrirá uma url no servidor;
* npm run deploy: publicará seu projeto no GitHub Pages;

## 5. Seu feedback é importante!

Se desejar deixe seu feedback e/ou sugestões para a autora do projeto neste [link](https://forms.gle/16TmKa9A7PxdzXmSA) do Google Forms, você não precisa se identificar. 

## 6. Desenvolvido por:

Projeto desenvolvido por Karina Vitangelo de Moraes (aluna da 4a geração da Laboratoria)

