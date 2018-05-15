'use strict';

var gameMenuItens = document.querySelectorAll('.lari-game-menu__item__link');

gameMenuItens.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    new Audio('assets/songs/coin.mp3').play();
  });
});