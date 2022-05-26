class Game {
    constructor(context, collisionContext, width, height, loseLifeSoundEffect){
        this.context = context;
        this.collisionContext = collisionContext;
        this.width = width;
        this.height = height;
        this.enemies= [];
        this.explosions = [];
        this.enemyInterval = 1000;
        this.enemyTimer = 0;
        //as game level increases, decrease the enemy interval
        this.lives = 5;
        this.loseLife = loseLifeSoundEffect;
        this.gameLevel = 0;
        this.gameOver = false;
        this.enemyTypes = ['vulture', 'mummy']
        
    }

    update(deltaTime){
        //update enemy
        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
        if(this.enemyInterval < this.enemyTimer){
            this.#addNewEnemy();
            this.enemyTimer = 0
            console.log(this.enemies)
        } else {
            this.enemyTimer+=deltaTime;
        }
        this.enemies.forEach((enemy) => enemy.update(deltaTime));

        //update explosions
        this.explosions = this.explosions.filter((explosion) => !explosion.markedForDeletion)
        this.explosions.forEach((explosion) => explosion.update(deltaTime))
    }

    draw(){
        this.enemies.forEach((enemy) => enemy.draw(this.context, this.collisionContext));
        this.explosions.forEach((explosion) => explosion.draw(this.context));
    }

    #addNewEnemy(){
        const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
        if(randomEnemy === 'vulture') this.enemies.push(new Vulture(this));
        else if (randomEnemy === 'mummy') this.enemies.push(new Mummy(this));
        this.enemies.sort(function(a,b){
            return a.y - b.y;
        })
    }
}
