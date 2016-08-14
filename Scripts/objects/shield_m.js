var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Player object used in the game
     *
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    var Shield = (function (_super) {
        __extends(Shield, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        //static isActivate: boolean = false;
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Shield(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Shield.prototype._checkBounds = function () {
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
        Shield.prototype.start = function () {
            this.x = 50;
            this.y = 300;
            this.position.x = this.x;
            this.position.y = this.y;
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Shield.prototype.update = function () {
            // player to follow mouse
            this.position = new objects.Vector2(this.x, this.y);
            // if (objects.Player.isActivate) {
            //     this.y = core.stage.mouseY;
            //     this.x = core.stage.mouseX;
            // }
            this.y = core.stage.mouseY;
            this.x = core.stage.mouseX;
            this._checkBounds();
        };
        return Shield;
    }(objects.GameObject));
    objects.Shield = Shield;
})(objects || (objects = {}));
//# sourceMappingURL=shield_m.js.map