const container = document.querySelector('.container');

for (var i = 1; i <= 256; i++) {
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
    console.log("somthing");
    squares.forEach((s) => {
        s.style.backgroundColor = null;
    })
}