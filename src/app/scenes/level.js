import { Scene } from 'phaser';

export default class Level extends Scene {
  constructor () {
    super({
      key: 'level'
    });
  }

  preload () {
  }

  create () {
    this.add.text(50, 150, 'Level 1', { fontFamily: 'monospace' }).setOrigin(0, 0);
  }

  update () {
  }
}
