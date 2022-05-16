const player = {
    x: 390,
    y: 580
};

function setup() {
    draw();
}

function draw() {
    const canvas = document.getElementById('invaders-canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);
    
    context.font = "48px Verdana";
    context.fillStyle = 'white';
    context.fillText("Space Invaders", 10, 50);

    context.fillStyle = 'yellow';
    context.fillRect(player.x, player.y, 20, 20);
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
            player.x += 10;
            break;
    }

    draw();
}

window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);