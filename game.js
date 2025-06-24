
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let player = { x: 10, y: 10, size: 20, color: 'lime' };
let goal = { x: 360, y: 10, size: 20, color: 'yellow' };
let score = 0;
let gameOver = false;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // Goal
    ctx.fillStyle = goal.color;
    ctx.fillRect(goal.x, goal.y, goal.size, goal.size);

    if (gameOver) {
        document.getElementById('bonus').classList.remove('hidden');
    }
}

function checkCollision() {
    if (
        player.x < goal.x + goal.size &&
        player.x + player.size > goal.x &&
        player.y < goal.y + goal.size &&
        player.y + player.size > goal.y
    ) {
        gameOver = true;
    }
}

function movePlayer(e) {
    const step = 10;
    switch (e.key) {
        case 'ArrowUp': player.y -= step; break;
        case 'ArrowDown': player.y += step; break;
        case 'ArrowLeft': player.x -= step; break;
        case 'ArrowRight': player.x += step; break;
    }
    checkCollision();
    draw();
}

document.addEventListener('keydown', movePlayer);
draw();
