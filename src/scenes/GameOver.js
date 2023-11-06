class GameOver extends Phaser.Scene {
    constructor(){
        super ("gameOverScene");
    }
    preload(){
        this.load.image('background', './assets/pixilart-drawing-background.png'); 
    } 
    create(){
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0); 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        //add text (and high score)
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('playScene');   
        } 
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            this.scene.start('menuScene'); 
        }
    }
} 