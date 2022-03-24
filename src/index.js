import Phaser from 'phaser';
import NicoStar from './assets/nicostar.png';
import Map from './assets/ressources/map/map.png';


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
    
    }
    create ()
    {
        const map = this.add.sprite(0,100 , 'map');
        map.setScale(2,2)

        const nico = this.add.image('400', '300', 'nico');
        nico.setScale(.1)

        //  This resizes the game world to match the layer dimensions
        this.tweens.add({
            y: 850,
            duration: 2000,
            ease: "Bounce",
            yoyo: true,
            loop: -1,
            target: nico
        });
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
