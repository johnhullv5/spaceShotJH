module objects {
    /**
     * This is the Enemy1 object used in the game
     * 
     * @export
     * @class Enemy1
     * @extends {createjs.Bitmap}
     */
    export class Enemy3 extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy: number;
        private _dx: number;
        private _explosion: objects.Explosion;
        private _isDestroyed: boolean;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);

            this.start();
        }

        public setExplosion(newExplosion: objects.Explosion) {
            this._explosion = newExplosion;
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
        public ResetFrameRate(newFrameRate: number): void {

            // this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            // this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift
            this.visible = true;
            this._dx = Math.floor((Math.random() * 5) + 8); // vertical drispeedft
            // console.log("dx:" + this._dx);
            this._dy = Math.floor((Math.random() * 4) + 2); // horizontal drift
            // console.log("dx:" + this._dy);

            this.x = 890;
            // get a random x location
            //this.y = Math.floor((Math.random() * (628 - (this.height * 0.5))) + (this.height * 0.5));
            this.y = 0;
            // get a random x location
            //this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
            //this._isDestroyed = false;

            //this._explosion.Reset();
            // if(this._explosion.InFlight)
            // {
            //      this._explosion.Reset();
            //  }

            // this._explosion.visible = false;
        }


        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(newFrameRate: number): void {
            if (this.y >= (628 + (this.width * 0.5))) {
                this.ResetFrameRate(newFrameRate);
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
            this._isDestroyed = false;
            this.ResetFrameRate(0);
        }

        public destroied(newFrameRate: number): void {
            
            this.eventFrame = newFrameRate;
            this._isDestroyed = true;
            if (this._isDestroyed)
           
            {
              
                this.visible = false;
                this._explosion.Fire(this.position, newFrameRate);
                this._explosion.InFlight = true;
            }

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
            if (this.x >= 600) this.x -= this._dx;

            //this._checkBounds();
        }

        public updateFrameRate(newFrameRate: number): void {
            this.position = new Vector2(this.x, this.y);
            this.y += this._dy;
            if (this.x >= 600) this.x -= this._dx;




            this._explosion.updateFrame(newFrameRate);

            this._checkBounds(newFrameRate);

        }
    }
}