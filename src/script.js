document.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const style = getComputedStyle(canvas);
    canvas.width = parseInt(style.width, 10);
    canvas.height = parseInt(style.height, 10);
    let canvasPosition = canvas.getBoundingClientRect();
    
    //collision canvas setup
    const collisionCanvas = document.getElementById('collisionCanvas');
    const collisionContext = collisionCanvas.getContext('2d');
    const collisionStyle = getComputedStyle(collisionCanvas);
    collisionCanvas.width = parseInt(collisionStyle.width, 10);
    collisionCanvas.height = parseInt(collisionStyle.height, 10);
    
    //score
    let score = 0;
    context.font = '50px Impact';

    let lastTime = 1;
    
    //create new game instance, it passes in the NON-collision AND collision canvas
    const game = new Game(context, collisionContext, canvas.width, canvas.height)

    //draw score function
    function drawScore() {
        context.fillStyle='black';
        context.fillText('Score: ' + score, 45, 75);
        context.fillStyle='white';
        context.fillText('Score: ' + score, 50, 75);
    }

    //CLICK EVENT LISTENER -> COLOR DETECTION
    window.addEventListener('click', function(evt) {
        //getImageData has 4 arguments: x, y, width, height of the area we want to scan
        // we want to scan the area we click with our mouse
        const detectPixelColor = collisionContext.getImageData(evt.x, evt.y, 1, 1)
        
        const pc = detectPixelColor.data;
        console.log(pc);
        game.enemies.forEach(enemy => {
            if(enemy.randomColors[0] === pc[0] && enemy.randomColors[1] === pc[1] && enemy.randomColors[2] === pc[2]){
                //collision!
                enemy.markedForDeletion = true;
                score++;
                // if()
                // game.explosions.push(new Explosion(enemy.x, enemy.y, enemy.width));
            }
        })        
    })


    //ANIMATE FUNCTION
    //count how many milliseconds occur between each frame using timestamp
    function animate(timeStamp){
        collisionContext.clearRect(0, 0, collisionCanvas.width, collisionCanvas.height)
        context.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        drawScore();
        game.update(deltaTime);
        // game.explosions
        game.draw();
        requestAnimationFrame(animate);
    }
    animate(0);
})


