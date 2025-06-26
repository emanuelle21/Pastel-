const zipper = document.getElementById('zipper');
const introCard = document.getElementById('intro-card');
const questionCard = document.getElementById('question-card');
const thanksCard = document.getElementById('thanks-card');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const confettiCanvas = document.getElementById('confetti-canvas');

// abrir zíper
zipper.addEventListener('click', () => {
  gsap.to(zipper, {y: 220, duration: 0.8, onComplete: showQuestion});
});

function showQuestion(){
  introCard.style.display = 'none';
  questionCard.classList.remove('hidden');
}

// botão Não foge
noBtn.addEventListener('mouseover', () => {
  const offsetX = (Math.random() - 0.5) * 120;
  const offsetY = (Math.random() - 0.5) * 120;
  gsap.to(noBtn, {x: offsetX, y: offsetY, duration: 0.3});
});

// botão Sim
yesBtn.addEventListener('click', () => {
  questionCard.style.display = 'none';
  thanksCard.classList.remove('hidden');
  launchConfetti();
});

// confetti
function launchConfetti(){
  confettiCanvas.classList.remove('hidden');
  const confettiSettings = { target: confettiCanvas, max: 120, size: 1.2 };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  // parar depois de 6s
  setTimeout(()=>{confettiCanvas.classList.add('hidden');},6000);
}