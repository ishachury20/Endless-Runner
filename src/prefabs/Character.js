class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame); 

        scene.add.existing(this); 
        scene.physics.add.existing(this); 
        this.isHit = false; 
        this.moveSpeed = 6; 
        
    } 

    update(){
        //keyboard functionality 
        //get rid of left arrow key
        //let playerVector = new Phaser.Math.Vector2(0, 0)

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT) && this.isHit == false){
            this.x += this.moveSpeed; 
            //playerVector.x = 1
            playerDirection = 'right'
        } 

        if(Phaser.Input.Keyboard.JustDown(keyLEFT) && this.isHit == false){
            //playerVector.x = -1
            playerDirection = 'left'
            this.x -= this.moveSpeed; 
        }

        this.anims.play(`${playerDirection} walk`, true); 

        
        /*if(Phaser.Input.Keyboard.JustDown(keyUP) && this.isHit == false){
            this.y -= this.moveSpeed; 
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN) && this.isHit == false){
            this.y += this.moveSpeed; 
        }*/ 

    }

}  

