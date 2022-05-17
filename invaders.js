let player = {
    x: 400,
    y: 580
};

let bullet = null;

function update() {
    if(bullet != null) {
        bullet.y -= 10;
    }
    drawPlayer();
}

function setup() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);

    context.fillStyle = 'white';
    context.font = '48px Verdana';
    context.fillText("Space Invaders", 10, 50);
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

    if(bullet != null) {
        context.fillStyle = "red";
        context.beginPath();
        context.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
        context.fill();
    }
}

function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
            player.x -= 10;
            break;
        case "ArrowRight":
            player.x += 10;
            break;
        case "ArrowUp":
            player.y -= 10;
            break;
        case "ArrowDown":
            player.y += 10;
            break;

        case " ":
            bullet = {
                x: player.x,
                y: player.y
            };
            break;
    }

}

window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);

setInterval(update, 50)