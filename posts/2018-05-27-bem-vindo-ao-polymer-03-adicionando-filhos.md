---
date: 2018-05-27
title: "Bem-vindo ao Polymer 3 - #02"
description: "Adicionando filhos com <slot>"
category: polymer, web components, js
---

![Polymer 3 is here! Adicionando filhos com a tag <slot>](/polymer3-02/capa-polymer-2.png)

Fala galera, beleza? [No primeiro post dessa série](https://larissaabreu.dev/bem-vindo-ao-polymer-03-adicionando-filhos/) nós vimos como criar um web component de Hello World onde ao utilizarmos a nossa tag `<hello-world>` já era renderizado um h1 com a nossa saudação.

Tudo muito lindo, muito maravilho, mas vocês devem ter se perguntado "Okay, e se eu não quiser que meu elemento renderize algo pré-definido? E se eu quiser definir o conteúdo que vai dentro do meu componente de acordo com o lugar onde vou utilizá-lo? E se eu quisesse utilizar um componente dentro do outro?". É por isso que o segundo artigo dessa série vai abordar exatamente esses pontos. Lhes apresento a tag `<slot>`, [confira mais sobre essa tag aqui](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)!

> O `<slot>` é um espaço reservado dentro de um web component onde você pode preencher com sua própria marcação HTML.

## Criando nosso elemento com <slot>

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
    <button>
      <slot></slot>
    </button>
    `;
  };
};

customElements.define('my-element', MyElement);
```

Acima temos um arquivo chamado <i>"slot.js"</i>, nele estamos criando o nosso web component `<my-element>`. Perceba que nosso componente é composto apenas de um `<button>` e que dentro desse button declaramos o `<slot>`.

## Utilizando nosso elemento

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="slot.js"></script>
  </head>
  <body>
    <my-element>
      <span>Entendi</span>
    </my-element>
  </body>
</html>
```

Com o nosso elemento criado, podemos usá-lo na nossa página conforme o exemplo acima. Onde estamos inserindo um `<span>` dentro do nosso componente com o texto <i>"Entendi"</i>.

Agora, ao renderizar a nossa página HTML, teremos o seguinte resultado:

![Página renderizada no browser com um botão que tem o texto "Entendi"](/polymer3-02/exemplo-slot-1.png)

Legal, neh?! Mas dessa forma **só podemos utilizar um `<slot>` dentro de cada componente… A não ser que eles sejam slots nomeados!**

## Slot nomeado

Um slot nomeado serve para quando queremos **mais de um slot dentro de um mesmo componente**. Como no exemplo abaixo:

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
    <h1>
      <slot name="header"></slot>
    </h1>
    <p>
      <slot name="paragraph"></slot>
    </p>
    `;
  };
};

customElements.define('my-element', MyElement);
```

Aqui temos um slot chamado <i>"header"</i>, que coloquei dentro de uma tag `<h1>`, e um slot chamado <i>"paragraph"</i>, que coloquei dentro de uma tag `<p>`.

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="slot-named.js"></script>
  </head>
  <body>
    <my-element>
      <span slot="header">Aqui é o título</span>
      <span slot="paragraph">Aqui é o paragrafo</span>
    </my-element>
  </body>
</html>
```

Na nossa página HTML conseguimos dizer qual `<span>` pertence a qual slot. Dessa forma **podemos ter vários slots no nosso componente**.

> Você consegue atribuir várias tags HTML ao mesmo slot. Por exemplo: se eu quiser colocar outro `<span>` na minha página e dizer que ele pertence ao slot "paragraph" eu posso.

Agora a nossa página renderizada está assim:

![Página renderizada com os conteúdos dos slots nomeados. Há um header escrito "Aqui é o título" e um paragrafo escrito "Aqui é o paragrafo"](/polymer3-02/exemplo-slot-2.png)

## Fallback

Sabendo o que é um slot nomeado você deve saber também que você pode ter um **slot nomeado que contém um fallback**, ou seja, **um valor default**. Isso pode ser muito útil quando você precisa, por exemplo, que algo seja renderizado no seu web component independente se algum elemento foi atrelado aquele slot ou não. Calma, não fica desesperado rs olha só o componente que tenho aqui:

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
    <h1>
      <slot name="header">Aqui é o titulo</slot>
    </h1>
    <button>
      <slot></slot>
    </button>
    `;
  };
};

customElements.define('my-element', MyElement);
```

Nesse componente eu tenho um slot "normal" (utilizei o mesmo slot do primeiro exemplo para ficar mais simples xD) e um slot nomeado (o meu "header"). Coloquei a frase <i>"Aqui é o titulo"</i> como **valor default do meu slot nomeado**.

Com meu componente criado dessa forma eu posso ter uma página HTML assim:

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="slot-fallback.js"></script>
  </head>
  <body>
    <my-element>
      <span>Entendi</span>
    </my-element>
  </body>
</html>
```

Ao renderizar minha página eu vou encontrar o seguinte resultado:

![Página com um valor default do slot renderizada contendo um <h1>Aqui é o titulo</h1> e um botão escrito "Entendi"](/polymer3-02/exemplo-slot-3.png)

Perceberam que **mesmo eu não declarando o slot nomeado ele apareceu** ali onde deveria? Isso por causa do fallback que atribuí a ele lá no meu componente.

>Se eu passasse na minha página HTML um conteúdo para o slot "header" esse conteúdo substituiria o meu valor de fallback :)

>Só é possível passar um valor de fallback para slots nomeados, lembre sempre disso xD

## Conclusão

No artigo de hoje pudemos ver como inserir marcações HTML dentro do nosso web component seja com um simples slot, com um slot nomeado ou com um fallback de slot nomeado. Agora podemos brincar um pouco mais com nossos componentes e fiquem ligados que [no próximo artigo](https://larissaabreu.dev/bem-vindo-ao-polymer-03-definindo-propriedades/) falarei sobre como **criar propriedades para seus componentes nativos**!

Ah… não se esqueçam de me seguir nas minhas redes sociais para continuar por dentro dos conteúdos que estou preparando para vocês xD
