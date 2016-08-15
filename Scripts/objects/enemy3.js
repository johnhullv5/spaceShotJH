var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Enemy1 object used in the game
     *
     * @export
     * @class Enemy1
     * @extends {createjs.Bitmap}
     */
    var Enemy3 = (function (_super) {
        __extends(Enemy3, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Enemy3(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Enemy3.prototype.setExplosion = function (newExplosion) {
            this._explosion = newExplosion;
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Enemy3.prototype.ResetFrameRate = function (newFrameRate) {
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
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Enemy3.prototype._checkBounds = function (newFrameRate) {
            if (this.y >= (628 + (this.width * 0.5))) {
                this.ResetFrameRate(newFrameRate);
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Enemy3.prototype.start = function () {
            this._isDestroyed = false;
            this.ResetFrameRate(0);
        };
        Enemy3.prototype.destroied = function (newFrameRate) {
            this.eventFrame = newFrameRate;
            this._isDestroyed = true;
            if (this._isDestroyed) {
                this.visible = false;
                this._explosion.Fire(this.position, newFrameRate);
                this._explosion.InFlight = true;
            }
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Enemy3.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            if (this.x >= 600)
                this.x -= this._dx;
            //this._checkBounds();
        };
        Enemy3.prototype.updateFrameRate = function (newFrameRate) {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            if (this.x >= 600)
                this.x -= this._dx;
            this._explosion.updateFrame(newFrameRate);
            this._checkBounds(newFrameRate);
        };
        return Enemy3;
    }(objects.GameObject));
    objects.Enemy3 = Enemy3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy3.js.map