module objects {
    /**
     * This is the Diamond object used in the game
     * 
     * @export
     * @class Diamond
     * @extends {objects.GameObject}
     */
    export class Diamond extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy: number;
        private _dx: number;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Diamond.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);

            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         * 
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset(): void {
            this._dx = Math.floor((Math.random() * 3) + 5); // horizontal drift
            console.log("dx:" + this._dx);
            this._dy = Math.floor((Math.random() * 5) + 2); // horizontal drift
            console.log("dx:" + this._dy);
            this.x = 890;
            // get a random x location
            this.y = Math.floor((Math.random() * (628 - (this.height * 0.5))) + (this.height * 0.5));

        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.x <= (0 + (this.width * 0.5))) {
                this._reset();
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
            this._reset();
          
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
            this.position = new Vector2(this.x, this.y);
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        }
    }
}