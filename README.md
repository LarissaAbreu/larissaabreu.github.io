# Meu site pessoal

> Site para compartilhar talks, conteúdos e informações sobre mim :)

## Stack

- Automatizador de tarefas: [Gulp](http://gulpjs.com)
- Ferramenta de template HTML: [Pug](https://pugjs.org/api/getting-started.html)
- Pré-processador CSS: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)

## Rodando o projeto localmente

**1 -** Prepare o ambiente:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone o projeto e installe as dependêcias:

```sh
$ git clone https://github.com/LarissaAbreu/my-app.git
$ cd my-app
$ npm install
```

**3 -** Rode o servidor estático com livereload:

```sh
$ gulp server
```

## Estrutura de pastas

    .
      ├── README.md
      ├── LICENSE.md
      ├── CONTRIBUTING.md
      ├── out/
      ├── src/
      |   ├── icons/
      |   ├── assets/
      |   |   ├── img/
      |   |   ├── scripts/
      |   |   |   └── script.js
      |   |   └── styles/
      |   |       ├── modules/
      |   |       └── style.styl
      |   ├── partials/
      |   |   ├── footer.pug
      |   |   └── header.pug
      |   ├── layouts/
      |   |   └── default.pug
      |   ├── projects.pug
      |   └── index.pug
      ├── gulpfile.js
      ├── package.json
      ├── projects.json
      ├── .editorconfig
      └── .gitignore

## Tarefas automatizadas

- `$ gulp build`: Compila, concatena e minifica todos os arquivos.
- `$ gulp server`: Escuta os arquivos buildados e inicia um servidor estático.

## Versionamento

Para manter uma melhor organização, seguiremos as diretrizes do [Versionamento Semântico 2.0.0](http://semver.org/).

## Contribuição

Veja no [guia](https://github.com/LarissaAbreu/my-app/issues) os próximos passos do projeto ;)
<br>
Quer contrinuir? [Siga essas recomendações](https://github.com/LarissaAbreu/my-app/blob/master/CONTRIBUTING.md).

## Licença

[Licença MIT](https://github.com/LarissaAbreu/my-app/blob/master/LICENSE.md) © [Larissa Abreu](http://larissaabreu.github.io/)
