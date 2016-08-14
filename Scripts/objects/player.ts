module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Player extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        //static isActivate: boolean = false;
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        public numOfArmors:number = 3;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString)

            this.start();
        }



        /**
        * This method checks if the object has reached its boundaries
        * 
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        private _checkBounds(): void {
            // checkbounds to stop player from going outside

            // check right bounds
            if (this.x >= (630 - (this.width * 0.5))) {
                this.x = (630 - (this.width * 0.5));
            }

            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }

            // check tob bounds
            if (this.y <= (0 - (this.height * 0.5))) {
                this.y = (0 - (this.height * 0.5));
            }

            // check bottm bounds
            if (this.y >= (628 - (this.height * 0.5))) {
                this.y = (628 - (this.height * 0.5));
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start(): void {
            this.x = 50;
            this.y = 300;

            this.position.x = this.x;
            this.position.y = this.y;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update(): void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);

            // if (objects.Player.isActivate) {
            //     this.y = core.stage.mouseY;
            //     this.x = core.stage.mouseX;
            // }
            this.y = core.stage.mouseY;
            this.x = core.stage.mouseX;
            this._checkBounds();
        }
    }
}