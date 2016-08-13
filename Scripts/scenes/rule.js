var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Rule = (function (_super) {
        __extends(Rule, _super);
        /**
         * Creates an instance of Rule.
         *
         */
        function Rule() {
            console.log("constructor");
            _super.call(this);
        }
        /**
         *
         */
        Rule.prototype.Start = function () {
            // Add Space Background
            this._space = new objects.Space("space1");
            this.addChild(this._space);
            // Add instruction image
            var ruleImg = new createjs.Bitmap(core.assets.getResult("rules"));
            this.addChild(ruleImg);
            // add the start button
            this._startButton = new objects.Button("startButton", 445, 515, true);
            this.addChild(this._startButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Rule.prototype.Update = function () {
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Rule.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        return Rule;
    }(objects.Scene));
    scenes.Rule = Rule;
})(scenes || (scenes = {}));
//# sourceMappingURL=rule.js.map