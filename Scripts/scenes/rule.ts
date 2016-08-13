module scenes {
    export class Rule extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _ruleButton: objects.Button;

        /**
         * Creates an instance of Rule.
         * 
         */
        constructor() {
            console.log("constructor");
            super();
        }

        /**
         * 
         */
        public Start(): void {
            // Add Space Background
            this._space = new objects.Space("space1");
            this.addChild(this._space);

            // Add instruction image
            var ruleImg = new createjs.Bitmap(core.assets.getResult("rules"));
            this.addChild(ruleImg);
            

            // add the start button
            this._startButton = new objects.Button("startButton", 445, 515, true)
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);

        }

        public Update(): void {
            // scene updates happen here...

        }

        // EVENT HANDLERS ++++++++++++++++
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        }
    }
}