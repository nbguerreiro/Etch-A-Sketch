const container = document.querySelector('.container');

let numOfSquares = 100;
let widthOfSquares = 100 / numOfSquares;
// console.log(widthOfSquares);
container.style.gridTemplateColumns = `repeat(${numOfSquares}, ${widthOfSquares}%)`;
container.style.gridTemplateRows = `repeat(${numOfSquares}, ${widthOfSquares}%)`;


for (var i = 1; i <= Math.pow(numOfSquares, 2); i++) {
    let newdiv = document.createElement('div');
    newdiv.classList.add('square');
    container.appendChild(newdiv);
}

const squares = container.querySelectorAll('.square');

squares.forEach((s) => {
    s.addEventListener('mouseenter', () => {
        s.style.backgroundColor = 'black';
    })
})

function restart() {
    console.log("restart");
    squares.forEach((s) => {
        s.style.backgroundColor = null;
    })
}