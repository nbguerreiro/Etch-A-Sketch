

const container = document.querySelector('#container');

for (var i = 1; i <= 256; i++) {
  let newdiv = document.createElement('div');
  newdiv.id = "square-div-" + i;
  container.appendChild(newdiv); 
}


