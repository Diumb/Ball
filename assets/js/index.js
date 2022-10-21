// Imports

import { checkMethods } from "./checkMethods.js";
import { animationMethods } from "./animationMethods.js";

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

// Keys List

let keyList = [

    {
        key: "Enter",
        func: () => animationMethods.startAnimation(animationSettings, ballAnimation),
    },

    {
        key: "Backspace",
        func: () => animationMethods.stopAnimation(animationSettings),
    },

];

// Window Size Variables

const windowHeight = document.documentElement.offsetHeight,
      windowWidth = document.documentElement.offsetWidth;

// Canvas Settings

canvas.width = windowWidth;
canvas.height = windowHeight;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

// Functions

function drawBall(x, y) {

    checkMethods.checkRebound(ballSettings, windowWidth, windowHeight);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, ballSettings.size, 0, 360);
    ctx.stroke();
    ctx.fill();

}

function ballAnimation(currentTime) {

    animationSettings.deltaTime = currentTime - animationSettings.lastUpdate;
    animationSettings.lastUpdate = currentTime;

    checkMethods.checkDirections(ballSettings, animationSettings.deltaTime / 1000, drawBall);

    if (animationSettings.isAnimation) {
        requestAnimationFrame(ballAnimation);
    }

}

// Event Listeners

document.addEventListener("keydown", event => {
    checkMethods.checkKeys(event.code, keyList);
});