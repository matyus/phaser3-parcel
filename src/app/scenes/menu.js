import { Scene } from 'phaser';

export default class Menu extends Scene {
  constructor () {
    super({
      key: 'menu'
    });
  }

  preload () {
    this.load.image('background', require('../assets/background.png'));
  }

  create () {
    this.add.image(0, 0, 'background').setOrigin(0, 0);
    this.add.text(50, 50, 'Hello world!', { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }).setOrigin(0, 0);
    this.add.text(50, 100, 'Hello world!', { fontFamily: 'Courier New' }).setOrigin(0, 0);
    this.add.text(50, 150, 'Hello world!', { fontFamily: 'monospace' }).setOrigin(0, 0);

    this.input.keyboard.on('keyup', () => {
      this.scene.start('level');
    });
  }

  update () {
  }
}
