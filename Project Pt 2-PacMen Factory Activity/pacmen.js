let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  // TODO add new Child image to game
  game.appendChild(/* TODO: add parameter */newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}
let imgVar = 0;
function update() {
  // loop over pacmen array and move each one and move image in DOM
  imgVar = (imgVar + 1) % 2;
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce

  let width = window.innerWidth;
  let height = window.innerHeight;
  let newVelo1 = setToRandom(-10);
  let newVelo2 = setToRandom(10);
  let img = document.querySelector("img");
  if(item.position.x > width - 100 || item.position.y > height - 100) {
    item.velocity.x = newVelo1.x;
    item.velocity.y= newVelo1.y;
  }else if(item.position.x < 0 || item.position.y < 0) {
    item.velocity.x = newVelo2.x;
    item.velocity.y = newVelo2.y;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}