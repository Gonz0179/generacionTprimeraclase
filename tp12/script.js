const words = ['californication','plataforma5','black','summer','flea','aeroplane','peppers','unlimited','arcadium','love','getaway','stadium','quixoticelixer','quarter','snow','dylan','zephyr','funky','chili','adventure','banana','blue','papu','mamuts','lo siento','sr.Jackson','green','yellow','purple','orange','pink','red','white','blackberry','pineapple','kiwi','grape','watermelon','mango','banana','avocado','orange','grapefruit','interfaz','users','admin','user','password','login','logout','forgot','password','email','username','account','admin','user','password','login','logout',
];
let randomWord;
let time = 10;
let score = 0;
let timeInterval;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
  randomWord = getRandomWord();
  document.getElementById('randomWord').textContent = randomWord;
}

function updateScore() {
  score++;
  document.getElementById('score').textContent = score;
}

function updateTime() {
  time--;
  document.getElementById('timeSpan').textContent = `${time}s`;

  if (time === 0) {
    clearInterval(timeInterval);
    endGame();
  }
}

function endGame() {
  document.getElementById('main').classList.add('oculto');
  document.getElementById('end-game-container').innerHTML = `
    <h1>Tiempo terminado</h1>
    <p id="Puntaje">Tu puntaje final es ${score}</p>
    <button onclick="location.reload()">Jugar de nuevo</button>
  `;
  document.getElementById('end-game-container').classList.add('show');
  contenedor= document.getElementById('main')
 
}
addToDOM();
timeInterval = setInterval(updateTime, 1000);

document.getElementById('text').addEventListener('input', function(e) {
  const typedText = e.target.value;

  if (typedText === randomWord) {
    addToDOM();
    updateScore();
    e.target.value = '';
    time = 10; 
  }
});

document.getElementById('text').addEventListener('input', function() {
  this.value = this.value.toLowerCase();
});
