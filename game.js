const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 10, y: 360, size: 20 };
let bonus = { x: 180, y: 180, size: 20 };

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Bonus
  ctx.fillStyle = "yellow";
  ctx.fillRect(bonus.x, bonus.y, bonus.size, bonus.size);

  if (player.x === bonus.x && player.y === bonus.y) {
    document.getElementById('bonus').classList.remove('hidden');
  }
}

function move(e) {
  switch (e.key) {
    case 'ArrowUp': player.y -= 10; break;
    case 'ArrowDown': player.y += 10; break;
    case 'ArrowLeft': player.x -= 10; break;
    case 'ArrowRight': player.x += 10; break;
  }
  draw();
}

document.addEventListener('keydown', move);
draw();
}

document.addEventListener('keydown', movePlayer);
draw();
