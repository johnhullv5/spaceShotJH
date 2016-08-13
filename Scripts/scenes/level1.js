var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Level1() {
            _super.call(this);
        }
        Level1.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            if (core.score >= core.toLevel2) {
                this.level1_bgsound.stop();
                core.scene = config.Scene.LEVEL2;
                core.changeScene();
            }
        };
        /**
         *
         */
        Level1.prototype.Start = function () {
            // space1 object
            this._space = new objects.Space("space1");
            this.addChild(this._space);
            // diamond array
            this._diamond = new Array();
            for (var count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }
            // player object
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this.level1_bgsound = createjs.Sound.play("level1_bgsound");
            this.level1_bgsound.loop = -1;
            // enemy1 array
            this._enemy1 = new Array();
            for (var count = 0; count < 3; count++) {
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
        };
        Level1.prototype.Update = function () {
            var _this = this;
            this._space.update();
            this._player.update();
            // update each enemy1
            this._diamond.forEach(function (diamond) {
                diamond.update();
                _this._collision.check(_this._player, diamond);
            });
            // update each enemy1
            this._enemy1.forEach(function (enemy1) {
                enemy1.update();
                _this._collision.check(_this._player, enemy1);
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
                this.level1_bgsound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Level1.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map