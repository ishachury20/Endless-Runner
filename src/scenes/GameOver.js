class GameOver extends Phaser.Scene {
    constructor(){
        super ("gameOverScene");
    }
    preload(){
        this.load.image('gameover', './assets/gameover.png'); 
        this.load.audio('restart', './assets/restart.wav'); 
        this.load.audio('click', './assets/click.wav'); 
    } 
    create(){
        this.background = this.add.tileSprite(0, 0, 640, 480, 'gameover').setOrigin(0,0); 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        this.displayhighscore = this.add.text(320, 375, highScore, { fontSize: '30px', fill: '#fff' });
        this.displayscore = this.add.text(320, 245, currentScore, { fontSize: '30px', fill: '#fff' }); 
        this.backgroundmusiccredit = this.add.text(20, 457, "Background Music 'Champion 80bpm' by kamhunt", { fontSize: '12px', fill: '#fff' }); 
        this.sfxcredit = this.add.text(20, 445, "Sfx by: MATRIXXX_, LorenzoTheGreat, n_audioman & ", { fontSize: '12px', fill: '#fff' }); 
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            currentScore = 0; 
            playerDirection = 'right'
            this.sound.play('restart'); 
            this.scene.start('playScene');   
        } 
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            currentScore = 0; 
            playerDirection = 'right'
            this.sound.play('click'); 
            this.scene.start('menuScene'); 
        }

        
    }
} 