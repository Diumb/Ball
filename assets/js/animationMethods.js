const animationMethods = {

    startAnimation(settings, func) {
        settings.isAnimation = true;
        requestAnimationFrame(func);
    },

    stopAnimation(settings) {
        settings.isAnimation = false;
    },

}

export { animationMethods };