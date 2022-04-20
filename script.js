const circles = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 1;
let progressPercentage = 0;


console.log(circles[index]);

next.addEventListener('click', () => {
    circles[index].classList.add('active');
    progressPercentage = progressPercentage + 33;
    progressBar.style.width = progressPercentage + '%';

    index++;
    if (index == 4) {
        next.disabled = true;
        prev.disabled = false;
    }
})

prev.addEventListener('click', () => {
    progressPercentage = progressPercentage - 33;
    progressBar.style.width = progressPercentage + '%';
    circles[index - 1].classList.remove('active');
    index--;
    if (index == 1) {
        next.disabled = false;
        prev.disabled = true;
    }
})