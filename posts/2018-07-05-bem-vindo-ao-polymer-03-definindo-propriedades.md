---
date: 2018-07-05
title: 'Bem-vindo ao Polymer 3 - #03'
description: Definindo propriedades
category: polymer, web components, js

---
![Polymer 3 is here! Definindo propriedades](/polymer3-03/capa-polymer-3.png)

E aí pessoal, tudo bem com vocês? No terceiro post dessa série, venho falar um pouco sobre como podemos **trabalhar com** as queridas **propriedades** nos nossos **web components**.

Caso você esteja chegando por aqui agora… [Aqui eu dei uma breve introdução de como criar nosso próprio componente nativo com a ajuda do Polymer 3](https://larissaabreu.dev/bem-vindo-ao-polymer-03-criando-um-elemento/) e [aqui eu falei sobre a tag `<slot>`](https://larissaabreu.dev/bem-vindo-ao-polymer-03-adicionando-filhos/)… Dá uma olhadinha lá que eu te espero para você não ficar perdido hoje xD

Pronto… Agora vamos direto ao ponto…

> Quando falamos de "propriedades" do seu componente estamos falando dos atributos do mesmo, beleza? Guarde essa informação aí :D

## Tipos de propriedades

Existem vários tipos de propriedades que você pode criar para o seu componente, dentre eles estão: `Boolean`, `String`, `Date`, `Number` e etc. Hoje mostrarei para vocês como declarar propriedades booleanas e strings.

## Propriedade de tipo "String"

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
      <label for="input">[[labeltext]]</label>
      <input id="input">
    `;
  };

  static get properties() {
    return {
      labeltext: String
    };
  };
};

customElements.define('my-element', MyElement);
```

Para declararmos uma propriedade no Polymer 3 basta utilizarmos o método estático `properties()`. Esse método espera retornar um objeto, que serão as nossas propriedades.

No exemplo acima, eu estou retornando `labeltext` e informando que minha propriedade é do tipo `string`.

Como assim do tipo string? Eu estou dizendo que ela **aceita uma string como valor**. Calma… Você já vai entender, eu espero hehehe.

Voltemos a olhar o nosso código acima. O nosso componente retorna um `<input>` e um `<label>`, certo? Perceberam que no `<label>` eu passei o valor `[[labeltext]]`? Dessa forma, eu estou dizendo para o meu código que: **quando o meu componente tiver o atributo labeltext o valor desse atributo será o valor do label do meu input**.

Você não deve estar entendendo nada, não é? Vou mostrar o código da minha página HTML e continuar a explicação xD

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="my-element.js"></script>
  </head>
  <body>
    <my-element labeltext="Input label"></my-element>
  </body>
</html>
```

Agora sim… Aqui está o meu HTML onde estou utilizando meu elemento criado um pouco mais acima.

A partir do momento que eu digo ao meu elemento que ele vai ter uma propriedade chamada `labeltext` essa **propriedade** está disponível como **atributo** no mesmo. Dessa forma… Ao utilizar meu elemento e colocar um atributo de labeltext para ele, terei esse resultado quando renderizar minha página:

![Renderizando a página temos um input e um label. O label tem o valor que eu defini no atributo do meu elemento](/polymer3-03/exemplo-props-1.png)

Ou seja… Se eu utilizasse meu elemento assim:

`<my-element labeltext=”Label teste post polymer 3”></my-element>`

![Página renderizando o meu elemento com um outro valor de label definido](/polymer3-03/exemplo-props-2.png)

O que iria estar escrito na minha label ao renderizar a página seria, exatamente, <i>"Label teste post polymer 3"</i> (conforme a imagem acima).

## Passando um valor default para sua propriedade

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
      <label for="input">[[labeltext]]</label>
      <input id="input" type=[[type]]>
    `;
  };

  static get properties() {
    return {
      type: {
        type: String,
        value: 'text'
      },
      labeltext: String
    };
  };
};

customElements.define('my-element', MyElement);
```

Observe o código acima… Continuamos tendo a nossa propriedade labeltext, só que agora temos uma propriedade `type`. O meu <i>type</i> aceita uma `string` como valor, mas caso eu não passe nada ao usar o meu componente **o valor padrão será text**.

Vamos dar uma olhadinha no HTML:

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="my-element.js"></script>
  </head>
  <body>
    <my-element labeltext="Input text"></my-element>
    <my-element labeltext="Input password" type="password"></my-element>
  </body>
</html>
```

Para poder demonstrar um pouco melhor o papel do valor default de uma propriedade eu utilizei duas vezes o meu componente. Na primeira vez eu utilizei apenas o atributo/propriedade de `labeltext` e na segunda eu acrescentei o `type`, passando `password` como valor.

Ao renderizar a nossa página conseguimos ver o primeiro `input` com o `type` text (padrão) e o segundo com o `type` password.

![gif de uma página renderizando dois inputs, um sem o atributo type (renderizado com o type text que é o valor default da minha propriedade) e outro com o type sendo definido como password](/polymer3-03/exemplo-props-3.gif)

## Propriedade de tipo "Boolean" (boleanas)

Agora que já vimos as duas principais formas de se trabalhar com propriedades de tipo `string` vamos falar desse outro tipo que é bastante utilizado também… As propriedades <i>booleanas</i>.

```js
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get template() {
    return html`
    <label for="input">[[labeltext]]</label>
    <input id="input" type=[[type]] disabled=[[disabled]]>
    `;
  };

  static get properties() {
    return {
      type: {
        type: String,
        value: 'text'
      },
      labeltext: String,
      disabled: {
        type: Boolean,
        value: false
      }
    };
  };
};

customElements.define('my-element', MyElement);
```

Como podemos ver no código acima, declarar uma propriedade booleana é muito simples. Basta informar o nome dela e atribuir a ela um objeto informando o tipo (`boolean`) e qual o valor padrão dela (no nosso exemplo eu utilizei o valor `false` como padrão).

> Declarar sua propriedade booleana como `false` por default é muito bom pois assim você está dizendo que caso o seu componente tenha essa propriedade/atributo o valor dela será então `true` (caso você não use-a em seu componente ela continuará sendo false e segue o jogo rs).

Após criar a minha propriedade booleana eu consigo usá-la dessa forma na minha página HTML:

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="my-element.js"></script>
  </head>
  <body>
    <my-element labeltext="Input text" disabled></my-element>
    <my-element labeltext="Input password" type="password"></my-element>
  </body>
</html>
```

Para o nosso exemplo, estou utilizando dois componentes no meu HTML. Um deles com a <i>propriedade</i> booleana que eu criei acima (`disabled`) e o outro apenas com as <i>propriedades</i> `labeltext` e `type` mesmo.

Ao renderizar a minha página eu verei o seguinte resultado na tela

![gif da página renderizada exibindo dois inputs. Um desabilitado e o outro com tipo password normalmente](/polymer03-3/exemplo-props-4.gif)

Com isso podemos configurar nossos componentes para se comportarem de alguma forma específica ou fazer algum tipo de validação caso determinada propriedade booleana seja true :)

## Conclusão

Agora que já sabemos como criar as nossas próprias propriedades podemos começar a brincar um pouco mais com os nossos componentes. **Recomendo fortemente que você tente criar qualquer componente para poder explorar um pouco melhor as zilhões de possibilidades que as propriedades nos trazem** :) E fique ligado que no próximo post dessa série falarei sobre como podemos **trabalhar com eventos e métodos nos nossos componentes**!

Ah… não se esqueçam de me seguir nas minhas redes sociais para continuar por dentro dos conteúdos que estou preparando para vocês xD