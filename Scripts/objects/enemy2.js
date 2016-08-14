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
    var Enemy2 = (function (_super) {
        __extends(Enemy2, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Enemy2(imageString) {
            _super.call(this, imageString);
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
        Enemy2.prototype.Reset = function () {
            // this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            // this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift
            this._dx = Math.floor((Math.random() * 5) + 8); // vertical drispeedft
            //console.log("dx:" + this._dx);
            this._dy = Math.floor((Math.random() * 4) + 2); // horizontal drift
            // console.log("dx:" + this._dy);
            this.x = 890;
            // get a random x location
            //this.y = Math.floor((Math.random() * (628 - (this.height * 0.5))) + (this.height * 0.5));
            this.y = 0;
            // get a random x location
            //this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Enemy2.prototype._checkBounds = function () {
            if (this.y >= (628 + (this.width * 0.5))) {
                this.Reset();
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
        Enemy2.prototype.start = function () {
            this.Reset();
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Enemy2.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            if (this.x >= 600)
                this.x -= this._dx;
            this._checkBounds();
        };
        return Enemy2;
    }(objects.GameObject));
    objects.Enemy2 = Enemy2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy2.js.map