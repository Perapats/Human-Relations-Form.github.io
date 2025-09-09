const startBtn = document.getElementById('start-quiz');

startBtn.addEventListener('mouseenter', () => {
    startBtn.style.transform = 'scale(1.1)';
});

startBtn.addEventListener('mouseleave', () => {
    startBtn.style.transform = 'scale(1)';
});

startBtn.addEventListener('click', () => {
    window.location.href = 'Essential/Quiz.html';
});
