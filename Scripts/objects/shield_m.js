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
        function Shield(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(Shield.prototype, "CurrentLives", {
            get: function () {
                return this._currentLives;
            },
            set: function (newLives) {
                this._currentLives = newLives;
            },
            enumerable: true,
            configurable: true
        });
        Shield.prototype.decreaseArmors = function (newLives, player) {
            var lives = this._currentLives;
            this.CurrentLives = newLives;
            if (lives > this.CurrentLives) {
                player.numOfArmors -= 1;
                this.visible = false;
            }
        };
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
            this.CurrentLives = 5;
            this.visible = false;
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
        };
        Shield.prototype.updateState = function (currentLives) {
            this.CurrentLives = currentLives;
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