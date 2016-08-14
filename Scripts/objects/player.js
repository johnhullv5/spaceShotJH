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
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Player(imageString) {
            _super.call(this, imageString);
            // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
            //static isActivate: boolean = false;
            // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
            this.numOfArmors = 3;
            this.numOffriend = 3;
            this._isArmorOn = false;
            this._livesOfArmor = 2;
            this._sheildDamage = false;
            this.start();
        }
        Player.prototype.getValidity = function () {
            return this._isArmorOn;
        };
        Player.prototype.armorOff = function () {
            this._isArmorOn = false;
        };
        Player.prototype.armorOn = function () {
            this._isArmorOn = true;
        };
        Player.prototype.getLivesOfArmor = function () {
            if (this.armorOn()) {
                return this._livesOfArmor;
            }
            else {
                return 0;
            }
        };
        Player.prototype.damage = function () {
            return this.damageArmor();
        };
        Player.prototype.damageArmor = function () {
            if (this._isArmorOn) {
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
            }
        };
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Player.prototype._checkBounds = function () {
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
            if (this.y <= (100 - (this.height * 0.5))) {
                this.y = (100 - (this.height * 0.5));
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
        Player.prototype.start = function () {
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
        Player.prototype.update = function () {
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
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map