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
    var Friend = (function (_super) {
        __extends(Friend, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Friend(imageString) {
            _super.call(this, imageString);
            // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
            //static isActivate: boolean = false;
            // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
            this.numOfArmors = 3;
            this._isArmorOn = false;
            this._livesOfArmor = 2;
            this._sheildDamage = false;
            this.start();
        }
        Friend.prototype.getValidity = function () {
            return this._isArmorOn;
        };
        Friend.prototype.armorOff = function () {
            this._isArmorOn = false;
        };
        Friend.prototype.armorOn = function () {
            this._isArmorOn = true;
        };
        Friend.prototype.getLivesOfArmor = function () {
            if (this.armorOn()) {
                return this._livesOfArmor;
            }
            else {
                return 0;
            }
        };
        Friend.prototype.damage = function () {
            this.damageArmor();
        };
        Friend.prototype.damageArmor = function () {
            if (this._livesOfArmor > 0) {
                this._livesOfArmor -= 1;
            }
            if (this._livesOfArmor === 0) {
                this.armorOff();
                this._sheildDamage = true;
                return true;
            }
            else {
                return false;
            }
        };
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Friend.prototype._checkBounds = function () {
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
            if (this.y <= (50 - (this.height * 0.5))) {
                this.y = (50 - (this.height * 0.5));
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
        Friend.prototype.start = function () {
            this.x = 50;
            this.y = 380;
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
        Friend.prototype.update = function () {
            // player to follow mouse
            this.position = new objects.Vector2(this.x, this.y);
            // if (objects.Player.isActivate) {
            //     this.y = core.stage.mouseY;
            //     this.x = core.stage.mouseX;
            // }
            this.y = core.stage.mouseY - this.height;
            this.x = core.stage.mouseX;
            this._checkBounds();
        };
        return Friend;
    }(objects.GameObject));
    objects.Friend = Friend;
})(objects || (objects = {}));
//# sourceMappingURL=friend.js.map