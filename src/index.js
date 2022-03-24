import Phaser from 'phaser';
import NicoStar from './assets/nicostar.png';
import Map from './assets/ressources/map/map.png';
import Coin from './assets/piece.png';


let map;
let nico;
let coin;
let cursors;



   

    function preload () {

        this.load.image('nico', NicoStar);
        this.load.image('map', Map);
        this.load.image('coin', Coin);
    }

   function  create ()
    {
        cursors = this.input.keyboard.createCursorKeys();

        // on applique la map de base
        map = this.add.image('480','300' , 'map');
        map.setScale(1);
        coin = this.add.image('840', '620', 'coin');
        coin.setScale(.1);

        


       
        nico = this.physics.add.sprite(350, 300, 'nico');
        nico.setScale(.1)
        nico.body.collideWorldBounds=true;

    
    }

    function update ()
    {


        nico.setVelocityX(0);
        nico.setVelocityY(0);


        // voir ici comment ajouter les déplacements
        if (cursors.up.isDown) {
            console.log("je monte")  
            nico.setVelocity(0, -300)

        }

        if(cursors.down.isDown) {
            console.log("je descend")
            nico.setVelocity(0, 300)


        }

        if (cursors.left.isDown) {
            console.log("gauche")
            nico.setVelocity(-300, 0)


        }

        if(cursors.right.isDown) {
            console.log("droite")
            nico.setVelocity(300, 0)

        }

        if (cursors.space.isDown) {
            console.log("attaque")
            console.log(nico)  

        }

        

    }


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1120,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade : {
            gravity: {y:0}
        }
    }
    
  
    
};

const game = new Phaser.Game(config);
