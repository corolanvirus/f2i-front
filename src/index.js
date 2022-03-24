import Phaser from 'phaser';
import NicoStar from './assets/nicostar.png';
import Map from './assets/ressources/map/map.png';
import Coin from './assets/piece.png';


let map;
let nico;
let coin;

class MyGame extends Phaser.Scene
{
    

    constructor ()
    {
        super();
       
    }

   

    preload ()
    {

        this.load.image('nico', NicoStar);
        this.load.image('map', Map);
        this.load.image('coin', Coin);
    
    }
    create ()
    {
        // on applique la map de base
        map = this.add.image('480','300' , 'map');
        map.setScale(1);

        // le personnage se trouve au spawn
        nico = this.add.image('300', '360', 'nico');
        nico.setScale(.1);

        coin = this.add.image('840', '620', 'coin');
        coin.setScale(.1);

    }
    update ()
    {

        const cursors = this.input.keyboard.createCursorKeys();


        if (cursors.up.isDown) {
            console.log("je monte")       
        }

        if(cursors.down.isDown) {
            console.log("je descend")
        }

        if (cursors.left.isDown) {
            console.log("gauche")
        }

        if(cursors.right.isDown) {
            console.log("droite")
        }

        if (cursors.space.isDown) {
            console.log("attaque")
        }

        

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1120,
    height: 800,
    scene: MyGame,
    pixelArt: true,
    
  
    
};

const game = new Phaser.Game(config);
