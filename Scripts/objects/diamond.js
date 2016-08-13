var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Diamond object used in the game
     *
     * @export
     * @class Diamond
     * @extends {objects.GameObject}
     */
    var Diamond = (function (_super) {
        __extends(Diamond, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Diamond.
         *
         * @constructor
         * @param {string} imageString
         */
        function Diamond(imageString) {
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
        Diamond.prototype._reset = function () {
            this.visible = true;
            this._dx = Math.floor((Math.random() * 3) + 5); // horizontal drift
            console.log("dx:" + this._dx);
            this._dy = Math.floor((Math.random() * 5) + 2); // horizontal drift
            console.log("dx:" + this._dy);
            this.x = 890;
            // get a random x location
            this.y = Math.floor((Math.random() * (628 - (this.height * 0.5))) + (this.height * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Diamond.prototype._checkBounds = function () {
            if (this.x <= (0 + (this.width * 0.5))) {
                this._reset();
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
        Diamond.prototype.start = function () {
            this._reset();
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Diamond.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        return Diamond;
    }(objects.GameObject));
    objects.Diamond = Diamond;
})(objects || (objects = {}));
//# sourceMappingURL=diamond.js.map