class GameOver extends Phaser.Scene {
    constructor(){
        super ("gameOverScene");
    }
    preload(){
        this.load.image('gameover', './assets/gameover.png'); 
    } 
    create(){
        this.background = this.add.tileSprite(0, 0, 640, 480, 'gameover').setOrigin(0,0); 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

       
        //add text (and high score)

        this.displayhighscore = this.add.text(320, 375, highScore, { fontSize: '30px', fill: '#fff' });
        this.displayscore = this.add.text(320, 245, currentScore, { fontSize: '30px', fill: '#fff' }); 
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            currentScore = 0; 
            this.scene.start('playScene');   
        } 
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            currentScore = 0; 
            this.scene.start('menuScene'); 
        }

        
    }
} 