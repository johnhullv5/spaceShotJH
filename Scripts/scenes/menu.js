var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.Start = function () {
            // Add Space Background
            this._space = new objects.Space("space1");
            this.addChild(this._space);
            // Add Menu Label
            this._menuLabel = new objects.Label("SpaceShot", "80px", "Consolas", "#FF0033", 445, 280, true);
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 300, 515, true);
            this.addChild(this._startButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add the rule button
            this._ruleButton = new objects.Button("ruleButton", 545, 515, true);
            this.addChild(this._ruleButton);
            // // Start button event listener
            this._ruleButton.on("click", this._ruleButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu.prototype.Update = function () {
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._ruleButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.RULE;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map