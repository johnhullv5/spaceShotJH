module scenes {
    export class Level3 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _diamond: objects.Diamond[];
        private _player: objects.Player;
        private _enemy3: objects.Enemy3[];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _level3Label: objects.Label;
        private _level3_bgsound: createjs.AbstractSoundInstance;

        //level3
        private _bullets: objects.player_bullet_update[];
        private _enemyBullets: objects.enemy3_bullet[];
        private _keyboardControls: objects.KeyboardControls;

        private _frameCount = 0;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;

        }

        /**
         * 
         */
        public Start(): void {
            // space1 object
            this._space = new objects.Space("space3");
            this.addChild(this._space);

            // bg Sound
            this._level3_bgsound = createjs.Sound.play("level3_bgsound");
            this._level3_bgsound.loop = -1;

            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);


            // diamond array
            this._diamond = new Array<objects.Diamond>();
            for (let count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }

            // // enemy3 array
            this._enemy3 = new Array<objects.Enemy3>();
            for (let count = 0; count < 1; count++) {
                this._enemy3.push(new objects.Enemy3("enemy3"));
                this.addChild(this._enemy3[count]);
            }

            //bullet array
            this._bullets = new Array<objects.player_bullet_update>();
            for (let bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.player_bullet("player_bullet_update"));
                this.addChild(this._bullets[bullet]);


            }

            //bullet array
            this._enemyBullets = new Array<objects.enemy3_bullet>();
            for (let bullet = 0; bullet < 10; bullet++) {
                this._enemyBullets.push(new objects.enemy3_bullet("enemy3_bullet"));
                this.addChild(this._enemyBullets[bullet]);


            }

             this._keyboardControls = new objects.KeyboardControls();

            // include a collision managers
            this._collision = new managers.Collision();

            this._level3Label = new objects.Label("Level 3 ", "40px", "Consolas", "#FFFF00", 50, 5, false);
            this.addChild(this._level3Label);

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FB791A", 300, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#1AFBF4", 600, 5, false);
            this.addChild(this._scoreLabel);


            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._frameCount++;
            this._space.update();
            this._player.update();

            this._diamond.forEach(diamond => {
                diamond.update();
                this._collision.check(this._player, diamond);
            });

            //update each enemy3
            this._enemy3.forEach(enemy3 => {
                enemy3.update();
                this._collision.check(this._player, enemy3);
            });

             this._bullets.forEach(bullet => {
                //update each bullet
                bullet.update();

            });

            this._enemyBullets.forEach(bullet => {
                //update each bullet
                bullet.update();

            });

           //update each enemy2
          //  this._enemy3.forEach(enemy3 => {
            //    enemy3.update();
           //     this._collision.check(this._player, enemy3);
          //  });

            //checks collisions between each enemy1 and each bullet
            this._enemy3.forEach(enemy3 => {
                this._bullets.forEach(bullet => {
                    this._collision.check(enemy3, bullet);
                })
            });

            //check if sapcebar is pushed .
            if (this._frameCount % 10 == 0 && this._keyboardControls.fire) {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }

            }

            //this._bullets[0].Fire(this._player.position);
            if (this._frameCount % 57 == 0) {
                this._enemy3.forEach(enemy3 => {
                    for (var bullet = 0; bullet < this._enemyBullets.length; bullet++) {
                        if (!this._enemyBullets[bullet].InFlight) {
                            this._enemyBullets[bullet].Fire(enemy3.position);
                            break;
                        }
                    }
                })
            }

            this._enemyBullets.forEach(bullet => {
                this._collision.check(this._player, bullet);
            });


            this._updateScoreBoard();

            if (core.lives < 1) {
                this._level3_bgsound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}