let player = {
    x: 400,
    y: 580
};

function setup() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);

    context.fillStyle = 'white';
    context.font = '48px Verdana';
    context.fillText("Space Invaders", 10, 50);

    drawPlayer();
}

function drawPlayer() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);
    
    context.fillStyle = "pink";
    // context.fillRect(390, 580, 20, 20);
    context.beginPath();
    context.moveTo(player.x, player.y);
    context.lineTo(player.x - 10, player.y + 20);
    context.lineTo(player.x + 10, player.y + 20);
    context.fill();
}

function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
            player.x -= 10;
            break;
        case "ArrowRight":
            player.x += 10;
            break;
    }

    drawPlayer();
}

window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);