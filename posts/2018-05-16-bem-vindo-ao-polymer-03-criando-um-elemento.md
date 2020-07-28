---
date: 2018-05-16
title: "Bem-vindo ao Polymer 3 - #01"
description: "Criando o elemento <hello-world>"
category: polymer, web components, js
---

![Polymer 3 is here! Criando o elemento <hello-world>](/polymer3-01/capa-polymer-1.png)

Fala galera. Esse ano (sim, só esse ano) eu conheci os Web Components (os famosos componentes nativos) e desde então me vi apaixonada! Assim como toda pessoa que está muito empolgada com algo decidi "espalhar a palavra" dos componentes nativos para todas as pessoas que estavam à minha volta. Com isso percebi que muitas pessoas não conheciam ou não sabiam do poder que tem os webcomponents e muitas pessoas vieram falar comigo para tirar várias dúvidas sobre o assunto. Foi aí que nasceu a ideia de criar uma série de curtos artigos com o básico para uma pessoa conseguir começar a brincar com esse universo e, aproveitando que foi lançado na última quarta-feira (09/05) durante o Google IO, vamos aprender a criar componentes nativos brincando com o [Polymer 3](https://www.polymer-project.org/) xD

Antes de mais nada, é preciso que você tenha um background de algumas coisinhas, apenas para não ficar perdido rs aqui embaixo estão alguns links (que acho necessários) para você ter uma ideia do que vamos abordar nessa série.

- O que são [Web Components](https://www.webcomponents.org/introduction)?
- Gerenciadores de dependências no front-end ([NPM](https://www.npmjs.com/) / [Yarn](https://classic.yarnpkg.com/pt-BR/))
- [Class](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) e [ES Modules](https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7)
- [Como o Polymer e as especificações de Web Components chegaram até aqui?](https://medium.com/@afonsopacifer/desmistificando-um-futuro-chamado-polymer-3-ae0476cf8c0a)

Beleza, agora com o devido background podemos começar a nos divertir! Chegou a hora de fazermos nosso componente nativo de "Hello World!" :D

## Instalando o Polymer

Primeiramente nós vamos instalar o Polymer 3 na pasta do nosso componente.

```shell
$ yarn add @polymer/polymer
```

Perceba que ao instalar o polymer na sua pasta, automaticamente você terá um `yarn.lock` e um `package.json` (onde estará informando que o polymer agora é uma dependência desse projeto) além da pasta `node_modules`.

O seu arquivo `package.json` deve estar como mostrado abaixo:

```json
{
  "dependencies": {
    "@polymer/polymer": "^3.0.2"
  }
}
```

Após ter instalado o polymer, vamos criar o nosso elemento. Uma boa prática é colocar o nome do seu arquivo com o mesmo nome do seu elemento.

> Pela regra dos CustomElements, é obrigatório que seu elemento tenha pelo menos duas palavras e que cada palavra seja separada por um hífen (para poder diferenciar um webcomponent dos elementos do HTML).

## Criando nosso elemento

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class HelloWorld extends PolymerElement {
  static get template() {
    return html`
      <h1>Hello World</h1>
    `;
  };
};

customElements.define('hello-world', HelloWorld);
```

No nosso arquivo `hello-world.js` nós importaremos o `html` (para poder escrever o HTML através de template literal) e o `PolymerElement` (para extender todos os poderes do polymer xD).

Com tudo importado corretamente no nosso arquivo, podemos criar o nosso elemento utilizando uma simples class. Onde temos um método `template()` que retorna o nosso HTML.

Por fim, basta que registremos a nossa `class` como um CustomElement (através da API nativa) que ele estará disponível para utilizarmos onde quisermos.

## Utilizando nosso componente

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="hello-world.js"></script>
  </head>
  <body>
    <hello-world></hello-world>
  </body>
</html>
```

Com o nosso componente pronto podemos importá-lo como um módulo do ES2015 na nossa página HTML e usá-lo como uma tag normalmente.

Para conferir o resultado, você precisa levantar um servidor local pois o ES modules tem como requisito mínimo um servidor estático. Eu utilizarei o `polymer-cli` para rodar todos os exemplos dados nessa série.

> Polymer-cli é uma ferramenta de linha de comando do polymer, que tem várias funções que te ajudam no dia a dia trabalhando com polymer.

Para subir o servidor vamos instalar o `polymer-cli` globalmente através do terminal.

```shell
$ yarn global add polymer-cli
```

Com o `polymer-cli` instalado, temos o comando `polymer serve` disponível para que possamos levantar o nosso servidor estático e conferir como está o nosso componente no browser.

![gif rodando o comando polymer serve e subindo um servidor estático](/polymer3-01/polymer-serve.gif)

![gif acessando o servidor estático através do browser](/polymer3-01/servidor-estático.gif)

## Conclusão

O que aprendemos nesse post é apenas o início do que veremos no decorrer da série. Não é mágico poder criar seus próprios componentes e poder utilizar eles em qualquer lugar sabendo que ele será exatamente do seu jeitinho? rs Então fique ligado nos [próximos posts](https://larissaabreu.dev/bem-vindo-ao-polymer-03-adicionando-filhos/) onde aprenderemos muuuito mais do que o Polymer 3 tem para nos oferecer e não esquece de me seguir nas minhas redes sociais para ficar sabendo de todas as novidades sobre os conteúdos que tô planejando trazer para vocês xD
