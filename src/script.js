document.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');
    const style = getComputedStyle(canvas);
    canvas.width = parseInt(style.width, 10);
    canvas.height = parseInt(style.height, 10);
    let canvasPosition = canvas.getBoundingClientRect();
    
    //collision canvas setup
    const collisionCanvas = document.getElementById('collisionCanvas')
    const collisionContext = collisionCanvas.getContext('2d');
    const collisionStyle = getComputedStyle(collisionCanvas);
    collisionCanvas.width = parseInt(collisionStyle.width, 10);
    collisionCanvas.height = parseInt(collisionStyle.height, 10);
    
    //score
    let score = 0;
    context.font = '50px Impact';

    //background game music
    // const backgroundMusic = new Audio('./assets/music/background.ogg');
    // backgroundMusic.volume = 0.1;
    // backgroundMusic.autoplay = true;
    // backgroundMusic.loop = true;
    // backgroundMusic.muted = true;
    // backgroundMusic.play();

    //game over music
    const gameOverMusic = new Audio('./assets/music/gameOver.ogg');
    gameOverMusic.volume = 0.1;

    //lose a life sound effect
    const loseLife = new Audio('./assets/music/loseLife.wav');
    loseLife.volume = 0.1;
    
    //create new game instance, it passes in the NON-collision AND collision canvas
    const game = new Game(context, collisionContext, canvas.width, canvas.height, loseLife)

    //draw score function
    function drawScoreAndHealth() {
        context.fillStyle='white';
        //health
        context.fillText('Score: ' + score, 50, 75);
        //health
        context.fillText('Lives: ' + game.lives, 250, 75);
    }

    //CLICK EVENT LISTENER -> COLOR DETECTION
    window.addEventListener('click', function(evt) {
        //getImageData has 4 arguments: x, y, width, height of the area we want to scan
        // we want to scan the area we click with our mouse
        const detectPixelColor = collisionContext.getImageData(evt.x - canvasPosition.left, evt.y - canvasPosition.top, 1, 1)
        const pc = detectPixelColor.data;
        console.log(pc);
        game.enemies.forEach(enemy => {
            if(enemy.randomColors[0] === pc[0] && enemy.randomColors[1] === pc[1] && enemy.randomColors[2] === pc[2]){
                //play explosion sound on collision and mark for deletion
                const sound = new Audio('./assets/effects/boom.wav')
                sound.volume = 0.1;
                sound.play();
 
                enemy.markedForDeletion = true;
                score++;
                if(enemy.type === 'mummy') game.explosions.push(new MummyExplosion(enemy.x, enemy.y, enemy.width))
                else if (enemy.type === 'vulture') game.explosions.push(new VultureExplosion(enemy.x, enemy.y, enemy.width))
                console.log(game.explosions)
            }
        })        
    })

    //draw game over message
    function drawGameOver(){
        context.textAlign = 'center';
        context.fillStyle='white';
        context.fillText('GAME OVER', canvas.width * 0.5 + 5, canvas.height * 0.5 - 20);
        context.fillText('Final Score is ' + score, canvas.width * 0.5 + 5, canvas.height * 0.5 + 40);
        context.fillText('Reload to try again', canvas.width * 0.5 + 5, canvas.height * 0.5 + 100);
    }

    let lastTime = 1;
    //ANIMATE FUNCTION
    //count how many milliseconds occur between each frame using timestamp
    function animate(timeStamp){
        collisionContext.clearRect(0, 0, collisionCanvas.width, collisionCanvas.height)
        context.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        drawScoreAndHealth();
        game.update(deltaTime);
        game.draw();
        if(!game.gameOver) requestAnimationFrame(animate);
        else {
            gameOverMusic.autoplay = true;
            gameOverMusic.play();
            drawScoreAndHealth();
            drawGameOver();
        };
    }
    animate(0);
})