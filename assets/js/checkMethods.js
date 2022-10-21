const checkMethods = {

    checkDirections(settings, speed, drawFunc) {

        switch (settings.direction) {
            case ("right"):
                drawFunc(settings.x += settings.speed * speed, settings.y);
                break;
            
            case ("left"):
                drawFunc(settings.x -= settings.speed * speed, settings.y);
                break;
            
            case ("top"):
                drawFunc(settings.x, settings.y -= settings.speed * speed);
                break;
            
            case ("bottom"):
                drawFunc(settings.x, settings.y += settings.speed * speed);
                break;
        }

        console.log(settings.y);
    
    },

    checkRebound(settings, windowWidth, windowHeight) {

        if (settings.x + settings.size >= windowWidth) {
            settings.direction = "left";
        } else if (settings.x <= 0) {
            settings.direction = "right";
        } else if (settings.y <= 0) {
            settings.direction = "bottom";
        } else if (settings.y + settings.size >= windowHeight) {
            settings.direction = "top";
        }
    
    },

    checkKeys(key, keysArray) {
        keysArray.forEach(item => {
            if (item.key == key) item.func();
        });
    }

}

export { checkMethods };