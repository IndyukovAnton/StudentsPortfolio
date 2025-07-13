


const rocket = document.getElementById('follow');
const body = document.body;
document.addEventListener('mousemove', (e) => {
  const rocketRect = rocket.getBoundingClientRect();
  const rocketCenterX = rocketRect.left + rocketRect.width / 2;
  const rocketCenterY = rocketRect.top + rocketRect.height / 2;
  const angle = Math.atan2(e.clientY - rocketCenterY, e.clientX - rocketCenterX);
  const degrees = angle * 180 / Math.PI + 90;
  rocket.style.transform = `translate(-50%, -50%) rotate(${degrees}deg)`;
  
  
  setTimeout(() => {
    rocket.style.left = e.clientX + 'px';
    rocket.style.top = e.clientY + 'px';
  }, 100);
});
document.addEventListener('click', (e) => {
  shoot(e.clientX, e.clientY);
});

function shoot(x, y) {
  const bullet = document.createElement('div');
  bullet.className = 'bullet';
  bullet.style.left = x + 'px';
  bullet.style.top = y + 'px';
  body.appendChild(bullet);
  const rocketRect = rocket.getBoundingClientRect();
  const rocketCenterX = rocketRect.left + rocketRect.width / 2;
  const rocketCenterY = rocketRect.top + rocketRect.height / 2;
  const angle = Math.atan2(y - rocketCenterY, x - rocketCenterX);
  const speed = 10;
  const dx = Math.cos(angle) * speed;
  const dy = Math.sin(angle) * speed;
  const intervalId = setInterval(() => {
    const currentX = parseInt(bullet.style.left);
    const currentY = parseInt(bullet.style.top);
    bullet.style.left = currentX + dx + 'px';
    bullet.style.top = currentY + dy + 'px';
    checkCollision(bullet);
    if (currentX < 0 || currentX > window.innerWidth || currentY < 0 || currentY > window.innerHeight) {
      clearInterval(intervalId);
      try {
        body.removeChild(bullet);
      } catch (error) {}
    }
  }, 20);
}
function createEnemy() {
  const enemy = document.createElement('div');
  enemy.className = 'enemy';
  enemy.style.left = Math.random() * (window.innerWidth - 30) + 'px';
  enemy.style.top = Math.random() * (window.innerHeight - 30) + 'px';
  body.appendChild(enemy);
}

let points = 0;

function getPoint() {
  const score = document.querySelector('.score');
  points++;
  score.innerHTML = "Score: " + points;
}

function checkCollision(bullet) {
  const enemies = document.querySelectorAll('.enemy');
  enemies.forEach(enemy => {
    const rect1 = bullet.getBoundingClientRect();
    const rect2 = enemy.getBoundingClientRect();
    if (rect1.left < rect2.right && rect1.right > rect2.left &&
      rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
        body.removeChild(enemy);
        body.removeChild(bullet);
        getPoint()
      }
    });
  }
  setInterval(createEnemy, 2500);
  
  
  function drawStars() {
    var tmpStar = document.createElement('figure');
    tmpStar.className = "star";
    tmpStar.style.top = 100 * Math.random() + '%';
    tmpStar.style.left = 100 * Math.random() + '%';
    document.getElementById('sky').appendChild(tmpStar);
  }
  
  function createStars(i) {
    for (let j = 0; j < i; j++) { 
      drawStars();
    }
  }
  
  function animateStars() {
    Array.prototype.forEach.call(stars, function(el, i) {
      TweenMax.to(el, Math.random() * 0.5 + 0.5, { opacity: Math.random(), onComplete: animateStars });
    });
  }
  
  createStars(200);

  const music= new Audio('bg_saund.mp3')
  music.volume= 0.2
  music.muted = true

  const musicController = document.querySelector('.music-controller')
  musicController.addEventListener('click', ()=>{
    music.play()
    if(music.muted){
      music.muted = false
      musicController.innerHTML = 'on'
    }else{
      music.muted = true
      musicController.innerHTML = 'off'
    }
  })
  
  music.onended = ()=>{
    console.log('onended')
    music.play()
  }