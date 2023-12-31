class Tutorial extends Phaser.Scene {
    constructor () {
        super ("tutorialScene");
    }

    preload(){
        this.load.image('tutorial', './assets/tutorial.png'); 
        this.load.audio('click', './assets/click.wav'); 
    } 
    create(){
        this.background = this.add.tileSprite(0, 0, 640, 480, 'tutorial').setOrigin(0,0); 
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        //add text (and high score)
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.sound.play('click'); 
            this.scene.start('menuScene');   
        } 
    }

}