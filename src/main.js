import Phaser from 'phaser';
import HelloWorldScene from './scenes/ExampleScene';
// @ts-ignore
import TestScene from './scenes/TestScene';

const config = {
	type: Phaser.AUTO,

	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 }
		}
	},
	scene: [TestScene]
}

export default new Phaser.Game(config)
