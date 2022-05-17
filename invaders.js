let player = {
    x: 400,
    y: 580
};

let bullets = [];

let direction = {
    left: false,
    right: false,
    up: false,
    down: false,
};

function update() {
    if(direction.left == true) {
        if(player.x > 10) {
            player.x -= 10;
        }
    }
    if(direction.right == true) {
        if(player.x < 790) {
            player.x += 10;
        }
    }
    if(direction.up == true) {
        if(player.y > 0) {
            player.y -= 10;
        }
    }
    if(direction.down == true) {
        if(player.y < 580) {
            player.y += 10;
        }
    }

    // update()
    for(let index = 0; index < bullets.length; index++) {
        bullets[index].y -= 10;
    }

    draw();
}

function draw() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 600);

    context.fillStyle = "white";
    context.font = '48px serif';
    context.fillText("Space Invaders", 10, 50);

    context.fillStyle = "yellow";
    // context.fillRect(390, 580, 20, 20);
    context.beginPath();
    context.moveTo(player.x, player.y);
    context.lineTo(player.x - 10, player.y + 20);
    context.lineTo(player.x + 10, player.y + 20);
    context.fill();

    // draw()
    for(let index = 0; index < bullets.length; index++) {
        const bullet = bullets[index];
        context.fillStyle = "red";
        context.beginPath();
        context.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
        context.fill();
    }

    // if(bullet != null) {
    //     context.fillStyle = "red";
    //     context.beginPath();
    //     context.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
    //     context.fill();
    // }
}

function setup() {
    draw();
}

function keyDown(event) {
    switch(event.key) {
        case "ArrowLeft":
            direction.left = true;
            // player.x -= 10;
            break;
        case "ArrowRight":
            direction.right = true;
            // player.x += 10;
            break;

        case "ArrowUp":
            direction.up = true;
            // player.y -= 10;
            break;

        case "ArrowDown":
            direction.down = true;
            // player.y += 10;
            break;

        case " ":
            bullets.push({
                x: player.x,
                y: player.y
            });
            break;
    }
}

function keyUp(event) {
    switch(event.key) {
        case "ArrowLeft":
            direction.left = false;
            break;
        case "ArrowRight":
            direction.right = false;
            break;

        case "ArrowUp":
            direction.up = false;
            break;

        case "ArrowDown":
            direction.down = false;
            break;
    }
}

window.addEventListener('load', setup);
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

setInterval(update, 50);