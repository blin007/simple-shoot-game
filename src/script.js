document.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const style = getComputedStyle(canvas);
    canvas.width = parseInt(style.width, 10);
    canvas.height = parseInt(style.height, 10);
    
    //collision canvas setup
    const collisionCanvas = document.getElementById('collisionCanvas');
    const collisionContext = canvas.getContext('2d');
    const collisionStyle = getComputedStyle(collisionCanvas);
    collisionCanvas.width = parseInt(collisionStyle.width, 10);
    collisionCanvas.height = parseInt(collisionStyle.height, 10);
    
    let lastTime = 1;
    
    const game = new Game(context, canvas.width, canvas.height)
    // const vulture = new Vulture(context, canvas.width, canvas.height);
    // console.log(vulture);
    //count how many milliseconds occur between each frame using timestamp
    function animate(timeStamp){
        context.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.update(deltaTime)
        game.draw()
        // vulture.update()
        // vulture.draw()
        requestAnimationFrame(animate);
    }
    animate(0);
})


