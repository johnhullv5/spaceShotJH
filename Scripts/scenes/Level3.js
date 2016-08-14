var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Level3() {
            _super.call(this);
            this._frameCount = 0;
        }
        Level3.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        /**
         *
         */
        Level3.prototype.Start = function () {
            // space1 object
            this._space = new objects.Space("space3");
            this.addChild(this._space);
            // bg Sound
            this._level3_bgsound = createjs.Sound.play("level3_bgsound");
            this._level3_bgsound.loop = -1;
            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._sheild = new objects.Shield("shield_m");
            this.addChild(this._sheild);
            // diamond array
            this._diamond = new Array();
            for (var count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }
            // // enemy3 array
            this._enemy3 = new Array();
            this._explosions = new Array();
            for (var count = 0; count < 3; count++) {
                this._enemy3.push(new objects.Enemy3("enemy3"));
                this._explosions.push(new objects.Explosion("explosion"));
                this._enemy3[count].setExplosion(this._explosions[count]);
                this.addChild(this._enemy3[count]);
                this.addChild(this._explosions[count]);
            }
            //bullet array
            this._bullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.player_bullet("player_bullet_update"));
                this.addChild(this._bullets[bullet]);
            }
            //bullet array
            this._enemyBullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
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
        };
        Level3.prototype.Update = function () {
            var _this = this;
            this._frameCount++;
            this._space.update();
            this._player.update();
            this._sheild.updateState(core.lives);
            this._diamond.forEach(function (diamond) {
                diamond.update();
                _this._collision.check(_this._player, diamond);
            });
            //update each enemy3
            this._enemy3.forEach(function (enemy3) {
                enemy3.updateFrameRate(_this._frameCount);
                _this._collision.check(_this._player, enemy3, _this._frameCount);
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
            //  this._enemy3.forEach(enemy3 => {
            //    enemy3.update();
            //     this._collision.check(this._player, enemy3);
            //  });
            //checks collisions between each enemy1 and each bullet
            //check if sapcebar is pushed .
            if (this._frameCount % 10 == 0 && this._keyboardControls.fire) {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            }
            if (this._frameCount % 10 == 0 && this._keyboardControls.armor) {
                if (this._player.numOfArmors > 0) {
                    this._sheild.visible = true;
                    this._player.armorOn();
                }
            }
            //this._bullets[0].Fire(this._player.position);
            if (this._frameCount % 200 == 0) {
                this._enemy3.forEach(function (enemy3) {
                    for (var bullet = 0; bullet < _this._enemyBullets.length; bullet++) {
                        if (!_this._enemyBullets[bullet].InFlight) {
                            if (enemy3.isVisible) {
                                _this._enemyBullets[bullet].Fire(enemy3.position);
                                break;
                            }
                        }
                    }
                });
            }
            this._enemy3.forEach(function (enemy3) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(enemy3, bullet, _this._frameCount);
                });
            });
            this._enemyBullets.forEach(function (bullet) {
                _this._collision.check(_this._player, bullet);
            });
            this._updateScoreBoard();
            if (this._player._sheildDamage) {
                this._sheild.visible = false;
                this._player._sheildDamage = false;
            }
            if (core.lives < 1) {
                this._level3_bgsound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Level3.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map