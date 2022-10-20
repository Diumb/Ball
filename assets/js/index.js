// Canvas Variables

const canvas = document.querySelector(".ball__canvas"),
      ctx = canvas.getContext("2d");
      
// Animation Variables

let animationSettings = {
    isAnimation: true,
    deltaTime: 0,
    lastUpdate: 0,
}

let ballSettings = {
    x: 20,
    y: 20,
    size: 5,
    speed: 1000,
    direction: "top",
}

// Window Size Variables

const windowHeight = document.documentElement.offsetHeight,
      windowWidth = document.documentElement.offsetWidth;

// Canvas Settings

canvas.width = windowWidth;
canvas.height = windowHeight;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

// Functions

function checkDirections(settings, speed) {

    switch (settings.direction) {
        case ("right"):
            drawBall(settings.x += ballSettings.speed * speed, settings.y);
            break;
        
        case ("left"):
            drawBall(settings.x -= ballSettings.speed * speed, settings.y);
            break;
        
        case ("top"):
            drawBall(settings.x, settings.y -= ballSettings.speed * speed);
            break;
        
        case ("bottom"):
            drawBall(settings.x, settings.y += ballSettings.speed * speed);
            break;
    }

}

function drawBall(x, y) {

    checkRebound(ballSettings);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, ballSettings.size, 0, 360);
    ctx.stroke();
    ctx.fill();

}

function checkRebound(settings) {

    if (settings.x + settings.size >= windowWidth) {
        settings.direction = "left";
    } else if (settings.x <= 0) {
        settings.direction = "right";
    } else if (settings.y <= 0) {
        settings.direction = "bottom";
    } else if (settings.y + settings.size >= windowHeight) {
        settings.direction = "top";
    }

}

function ballAnimation(currentTime) {
    animationSettings.deltaTime = currentTime - animationSettings.lastUpdate;
    animationSettings.lastUpdate = currentTime;

    checkDirections(ballSettings, animationSettings.deltaTime / 1000);

    if (animationSettings.isAnimation) {
        requestAnimationFrame(ballAnimation);
    }
}

// Event Listeners

document.addEventListener("keydown", event => {
    if (event.code == "Enter") {
        requestAnimationFrame(ballAnimation);
    }
});

