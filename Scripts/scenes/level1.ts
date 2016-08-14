module scenes {
    export class Level1 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _diamond: objects.Diamond[];
        private _player: objects.Player;
        private _enemy1: objects.Enemy1[];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _level1Label: objects.Label;
        private level1_bgsound: createjs.AbstractSoundInstance;
       

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
            if (core.score >= core.toLevel2) {
                this.level1_bgsound.stop();
                core.scene = config.Scene.LEVEL2;
                core.changeScene();
            }
        }

        /**
         * 
         */
        public Start(): void {
            // space1 object
            this._space = new objects.Space("space1");
            this.addChild(this._space);


            // diamond array
            this._diamond = new Array<objects.Diamond>();
            for (let count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }

            



            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this.level1_bgsound = createjs.Sound.play("level1_bgsound");
            this.level1_bgsound.loop = -1;
            //TEST  TEST  TEST  TEST 
           

            // enemy1 array
            this._enemy1 = new Array<objects.Enemy1>();
            for (let count = 0; count < 3; count++) {
                this._enemy1.push(new objects.Enemy1("enemy1"));
                this.addChild(this._enemy1[count]);
            }



            // include a collision managers
            this._collision = new managers.Collision();

            this._level1Label = new objects.Label("Level 1 ", "40px", "Consolas", "#FFFF00", 50, 5, false);
            this.addChild(this._level1Label);

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FB791A", 300, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#1AFBF4", 600, 5, false);
            this.addChild(this._scoreLabel);




            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._space.update();

            this._player.update();


            // update each diamond
            this._diamond.forEach(diamond => {
                diamond.update();
                this._collision.check(this._player, diamond);
            });

            

            // update each enemy1
            this._enemy1.forEach(enemy1 => {

                enemy1.update();
                //this._collision.check(enemy1,bullet);
                //checks collision nwith the player and each enmemy1
                this._collision.check(this._player, enemy1);
                // })
            });
           

            this._updateScoreBoard();

            if (core.lives < 1) {
                this.level1_bgsound.stop();
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