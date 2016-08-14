var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var player_bullet_update = (function (_super) {
        __extends(player_bullet_update, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of player_bullet.
         *
         * @constructor
         * @param {string} imageString
         */
        function player_bullet_update(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(player_bullet_update.prototype, "Speed", {
            //PUBLIC PROPERTIES
            get: function () {
                return this._speed;
            },
            set: function (newSpeed) {
                this._speed = newSpeed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(player_bullet_update.prototype, "InFlight", {
            get: function () {
                return this._inFlight;
            },
            set: function (newState) {
                this._inFlight = newState;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS
        /**
         * rest the bullet
         *
         * @private
         * @method _reset
         * @return void
         */
        player_bullet_update.prototype.Reset = function () {
            this.position = this._defaultPostion;
            this.x = this.position.x;
            this.y = this.position.y;
            this.InFlight = false;
        };
        /**
      * check the bullet bounds
      *
      * @private
      * @method _checkBounds
      * @return void
      */
        player_bullet_update.prototype._checkBounds = function () {
            //decide when fly out of right side of 
            if (this.position.x >= 1000 - this.width) {
                this.Reset();
            }
        };
        //PUBLIC METHODS
        /**
            * this method trigger the bullet.
            *
            * @private
            * @method Fire
            * @param Vector2
            * @return void
            */
        player_bullet_update.prototype.Fire = function (newPosition) {
            this.x = newPosition.x;
            this.y = newPosition.y;
            this.position = newPosition;
            this.InFlight = true;
        };
        player_bullet_update.prototype.start = function () {
            this._defaultPostion = new objects.Vector2(-1000, -1000);
            this.Speed = 12;
            //this._defaultPostion = new Vector2(-1000, -1000);
            //this.InFlight = false;
            this.Reset();
        };
        player_bullet_update.prototype.update = function () {
            if (this.InFlight) {
                this.x += this.Speed;
            }
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return player_bullet_update;
    }(objects.GameObject));
    objects.player_bullet_update = player_bullet_update;
})(objects || (objects = {}));
//# sourceMappingURL=player_bullet_update.js.map