const gameMenuItens = document.querySelectorAll('.lari-game-menu__item__link');

gameMenuItens.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    new Audio('assets/songs/coin.mp3').play();
  });
});
