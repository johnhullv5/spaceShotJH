var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var enemy3_bullet = (function (_super) {
        __extends(enemy3_bullet, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of player_bullet.
         *
         * @constructor
         * @param {string} imageString
         */
        function enemy3_bullet(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(enemy3_bullet.prototype, "Speed", {
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
        Object.defineProperty(enemy3_bullet.prototype, "InFlight", {
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
        enemy3_bullet.prototype.Reset = function () {
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
        enemy3_bullet.prototype._checkBounds = function () {
            //decide when fly out of right side of 
            if (this.position.x <= this.width) {
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
        enemy3_bullet.prototype.Fire = function (newPosition) {
            this.x = newPosition.x;
            this.y = newPosition.y;
            this.position = newPosition;
            this.InFlight = true;
        };
        enemy3_bullet.prototype.start = function () {
            this._defaultPostion = new objects.Vector2(-1000, -1000);
            this.Speed = 10;
            //this._defaultPostion = new Vector2(-1000, -1000);
            //this.InFlight = false;
            this.Reset();
        };
        enemy3_bullet.prototype.update = function () {
            if (this.InFlight) {
                this.x -= this.Speed;
            }
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return enemy3_bullet;
    }(objects.GameObject));
    objects.enemy3_bullet = enemy3_bullet;
})(objects || (objects = {}));
//# sourceMappingURL=enemy3_bullet.js.map