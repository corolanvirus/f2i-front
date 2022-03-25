import Phaser from 'phaser';
// @ts-ignore
import NicoStar from '../../public/images/nicostar/nicostar.png';
// @ts-ignore
import Map from '../../public/images/map/map.png';
// @ts-ignore
import Coin from '../../public/images//coins/piece.png';

let map;
let nico;
let coin;
let cursors;

export default class TestScene extends Phaser.Scene {
    constructor() {
        super('hello-world')
    }

    preload() {

        this.load.image('nico', NicoStar);
        this.load.image('map', Map);
        this.load.image('coin', Coin);
    }

    create() {
        cursors = this.input.keyboard.createCursorKeys();

        // on applique la map de base
        map = this.add.image(480, 300, 'map');
        map.setScale(1);
        coin = this.add.image(840, 620, 'coin');
        coin.setScale(.1);





        nico = this.physics.add.sprite(350, 300, 'nico');
        nico.setScale(.1)
        nico.body.collideWorldBounds = true;


    }

    update() {


        nico.setVelocityX(0);
        nico.setVelocityY(0);


        // voir ici comment ajouter les déplacements
        if (cursors.up.isDown) {
            console.log("je monte")
            nico.setVelocity(0, -300)

        }

        if (cursors.down.isDown) {
            console.log("je descend")
            nico.setVelocity(0, 300)


        }

        if (cursors.left.isDown) {
            console.log("gauche")
            nico.setVelocity(-300, 0)


        }

        if (cursors.right.isDown) {
            console.log("droite")
            nico.setVelocity(300, 0)

        }

        if (cursors.space.isDown) {
            console.log("attaque")
            console.log(nico)

        }



    }
}



