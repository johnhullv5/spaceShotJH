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
            // diamond array
            this._diamond = new Array();
            for (var count = 0; count < 2; count++) {
                this._diamond.push(new objects.Diamond("diamond"));
                this.addChild(this._diamond[count]);
            }
            // // enemy3 array
            this._enemy3 = new Array();
            for (var count = 0; count < 1; count++) {
                this._enemy3.push(new objects.Enemy3("enemy3"));
                this.addChild(this._enemy3[count]);
            }
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
            this._space.update();
            this._player.update();
            this._diamond.forEach(function (diamond) {
                diamond.update();
                _this._collision.check(_this._player, diamond);
            });
            //update each enemy2
            this._enemy3.forEach(function (enemy2) {
                enemy2.update();
                _this._collision.check(_this._player, enemy2);
            });
            this._updateScoreBoard();
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