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
        newdiv.style.filter = "brightness(80%)";
        container.appendChild(newdiv);
    }

    let squares = container.querySelectorAll('.square');

    squares.forEach((s) => {
        s.addEventListener('mouseenter', () => {
            s.style.backgroundColor = randomRGB();

            // darken color 10% with each passing
            let bright = Number(s.style.filter.match(/\d+/)[0]) - 10;
            if (bright < 0) {
                bright = 0;
            }
            s.style.filter = `brightness(${bright}%)`;
        })
    })
}

// initial grid
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