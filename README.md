# Island Hopper
## Scene Classes
> There are multiple scene classes within the game. They are Menu, Tutorial, Play, and GameOver. These allow for the player to seamlessly travel between different scenes, without reloading the page. 
## Tutorial Scene
> The tutorial provides the user information of the game's controls as well as to avoid obstacles. The only user inputs for player control this game are the following keys: up, down, left, and right arrow keys. There are other keys specifically used to transition into other scences or restart scenes. 
## Escalating Challenge 
> The clouds are the only obstacle in the character's path. These clouds are split into two distinct groups: clouds that continously wrap around the screen, and randomly generated clouds. The clouds that wrap around the screen are created through essentially the Phaser Wrap function (in which a defined collision will reset the clouds' position at the end of the game configuration screen). These clouds maintain the same velocity and are programmed to move towards the player to increase difficulty as the player's survival time increases. The other type of clouds are randomly generated clouds. These clouds are called every five seconds through the use of a callback function. Their position is randomly generated, and as they are destroyed, can call "child" to be born. 
## Assets 
> Most of the art was created by Isha Chury using pixilart.com, with the exception of any music assets. These assets were found in the following two websites: freesound.org and pixabay.com. There are a total of four sound effects used throughout the game, and one looping soundtrack. 
