module scenes {
    export class Level2 extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _diamond: objects.Diamond[];
        private _player: objects.Player;
        private _enemy2: objects.Enemy2[];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _level2Label: objects.Label;
        private _level2_bgsound: createjs.AbstractSoundInstance;

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
           if(core.score >= core.toLevel3){
                this._level2_bgsound.stop();
                core.scene = config.Scene.LEVEL3;
                core.changeScene();
            } 
        }

        /**
         * 
         */
        public Start(): void {
            // space1 object
            this._space = new objects.Space("space2");
            this.addChild(this._space);

            // bg Sound
            this._level2_bgsound = createjs.Sound.play("level2_bgsound");
            this._level2_bgsound.loop = -1;

            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);
           

             // diamond array
            this._diamond = new Array<objects.Diamond>();
            for (let count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }
            
            // // enemy2 array
            this._enemy2 = new Array<objects.Enemy2>();
            for (let count = 0; count < 1; count++) {
                this._enemy2.push(new objects.Enemy2("enemy2"));
                this.addChild(this._enemy2[count]);
            }

            // include a collision managers
            this._collision = new managers.Collision();

            this._level2Label = new objects.Label("Level 2 ", "40px", "Consolas", "#FFFF00", 50, 5, false);
            this.addChild(this._level2Label);

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
           
            this._diamond.forEach(diamond => {
                 diamond.update();
                 this._collision.check(this._player, diamond);
             });

             //update each enemy2
            this._enemy2.forEach(enemy2 => {
                enemy2.update();
                this._collision.check(this._player, enemy2);
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
                this._level2_bgsound.stop();
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