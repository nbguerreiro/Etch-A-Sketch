const container = document.querySelector('.container');

function randomValRGB() {
    return Math.floor(Math.random() * 255);
}

function randomRGB() {
    return `rgb(${randomValRGB()}, ${randomValRGB()}, ${randomValRGB()})`;
}

function makeGrid(n) {
    container.innerHTML = '';
    let widthOfSquares = 100 / n;
    container.style.gridTemplateColumns = `repeat(${n}, ${widthOfSquares}%)`;
    container.style.gridTemplateRows = `repeat(${n}, ${widthOfSquares}%)`;

    for (var i = 1; i <= Math.pow(n, 2); i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add('square');
        container.appendChild(newdiv);
    }

    let squares = container.querySelectorAll('.square');

    squares.forEach((s) => {
        s.addEventListener('mouseenter', () => {
            // s.style.backgroundColor = 'black';
            s.style.backgroundColor = randomRGB();
        })
    })
}
makeGrid(16);





function restart() {
    let squares = container.querySelectorAll('.square');
    squares.forEach((s) => {
        s.style.backgroundColor = null;
    })

    let question = prompt("How many squares?", "16");
    if (question > 100) {
        question = 100;
    }
    makeGrid(question);
}