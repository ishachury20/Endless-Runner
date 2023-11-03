class GameOver extends Phaser.Scene {
    constructor(){
        super ("gameOverScene");
    }
    preload(){
        this.load.image('background', './assets/pixilart-drawing-background.png'); 
    } 
    create(){
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        //add text (and high score)
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('playScene');   
        } 
    }
} 