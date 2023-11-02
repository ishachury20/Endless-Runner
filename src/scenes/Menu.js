class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    preload() {
        this.load.image('menuscreen', './assets/pixil-frame-menu.png'); 
        //add audio later 
    }

    create(){
        this.menuscreen = this.add.tileSprite(0, 0, 640, 480, 'menuscreen').setOrigin(0, 0);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
    } 

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene'); 
        }
    }

} 