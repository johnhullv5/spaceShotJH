var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Level2() {
            _super.call(this);
            this._frameCount = 0;
        }
        Level2.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            if (core.score >= core.toLevel3) {
                this._level2_bgsound.stop();
                core.scene = config.Scene.LEVEL3;
                core.changeScene();
            }
        };
        /**
         *
         */
        Level2.prototype.Start = function () {
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
            this._diamond = new Array();
            for (var count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }
            this._bullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.player_bullet("player_bullet"));
                this.addChild(this._bullets[bullet]);
            }
            this._enemyBullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._enemyBullets.push(new objects.enemy2_bullet("enemy2_bullet"));
                this.addChild(this._enemyBullets[bullet]);
            }
            //TEST TEST
            //this._bullets[0].Fire(this._player.position);
            // this._bullets[0].Fire(this._player.position);
            //console.log(this._player.position);
            //TEST ENDS
            // // enemy2 array
            this._enemy2 = new Array();
            for (var count = 0; count < 5; count++) {
                this._enemy2.push(new objects.Enemy2("enemy2"));
                this.addChild(this._enemy2[count]);
            }
            // include a collision managers
            this._collision = new managers.Collision();
            this._keyboardControls = new objects.KeyboardControls();
            this._level2Label = new objects.Label("Level 2 ", "40px", "Consolas", "#FFFF00", 50, 5, false);
            this.addChild(this._level2Label);
            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FB791A", 300, 5, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#1AFBF4", 600, 5, false);
            this.addChild(this._scoreLabel);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Level2.prototype.Update = function () {
            var _this = this;
            this._frameCount++;
            this._space.update();
            this._player.update();
            this._diamond.forEach(function (diamond) {
                diamond.update();
                _this._collision.check(_this._player, diamond);
            });
            this._bullets.forEach(function (bullet) {
                //update each bullet
                bullet.update();
            });
            this._enemyBullets.forEach(function (bullet) {
                //update each bullet
                bullet.update();
            });
            //update each enemy2
            this._enemy2.forEach(function (enemy2) {
                enemy2.update();
                _this._collision.check(_this._player, enemy2);
            });
            //checks collisions between each enemy1 and each bullet
            this._enemy2.forEach(function (enemy2) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(enemy2, bullet);
                });
            });
            //check if sapcebar is pushed .
            if (this._frameCount % 5 == 0 && this._keyboardControls.fire) {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            }
            //this._bullets[0].Fire(this._player.position);
            if (this._frameCount % 57 == 0) {
                this._enemy2.forEach(function (enemy2) {
                    for (var bullet = 0; bullet < _this._enemyBullets.length; bullet++) {
                        if (!_this._enemyBullets[bullet].InFlight) {
                            _this._enemyBullets[bullet].Fire(enemy2.position);
                            break;
                        }
                    }
                });
            }
            this._enemyBullets.forEach(function (bullet) {
                _this._collision.check(_this._player, bullet);
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
                this._level2_bgsound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Level2.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map