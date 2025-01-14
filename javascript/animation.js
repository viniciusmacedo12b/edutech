
const slides = document.querySelector('.slides');
const buttonLeft = document.getElementById('right');
const buttonRight = document.getElementById('left');

let currentOffset = 0; // Controle da posição atual dos slides
const slideWidth = 200; // Largura do slider (ajuste conforme necessário)
const totalSlides = 6; // Total de imagens no slider

// Mover os slides para a esquerda
buttonLeft.addEventListener('click', () => {
  currentOffset -= slideWidth;

  // Voltar para o final se ultrapassar o limite à esquerda
  if (Math.abs(currentOffset) >= slideWidth * totalSlides) {
    currentOffset = 0;
  }

  slides.style.transform = `translateX(${currentOffset}px)`;
});

// Mover os slides para a direita
buttonRight.addEventListener('click', () => {
  currentOffset += slideWidth;

  // Voltar para o início se ultrapassar o limite à direita
  if (currentOffset > 0) {
    currentOffset = -(slideWidth * (totalSlides - 1));
  }

  slides.style.transform = `translateX(${currentOffset}px)`;
});
