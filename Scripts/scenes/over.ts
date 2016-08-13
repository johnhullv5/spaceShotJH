module scenes {
    export class Over extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space:objects.Space;
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _finalScoreLabel: objects.Label;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Space Background
            this._space = new objects.Space("space1");
            this.addChild(this._space);

            // Add Menu Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER", "60px","Consolas", "#FDFDFD",
                445, 280, true
                );
            this.addChild(this._gameOverLabel);

            // Add Score Label
            this._finalScoreLabel = new objects.Label(
                "SCORE: " + core.score, "60px", "Consolas", "#1AFBF4",445, 350, true)
            this.addChild(this._finalScoreLabel);

            // add the start button
            this._restartButton = new objects.Button("restartButton", 445, 515, true)
            this.addChild(this._restartButton);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
           
        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.lives = 5;
            core.score = 0;
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        }
    }
}