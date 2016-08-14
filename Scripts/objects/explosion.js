var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of player_bullet.
         *
         * @constructor
         * @param {string} imageString
         */
        function Explosion(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(Explosion.prototype, "Speed", {
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
        Object.defineProperty(Explosion.prototype, "InFlight", {
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
        Explosion.prototype.Reset = function () {
            this.position = this._defaultPostion;
            this.x = this.position.x;
            this.y = this.position.y;
            this.InFlight = false;
            this.visible = false;
            this._startFrameRate = 0;
        };
        /**
      * check the bullet bounds
      *
      * @private
      * @method _checkBounds
      * @return void
      */
        Explosion.prototype._checkBounds = function () {
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
        Explosion.prototype.Fire = function (newPosition, newFrameRate) {
            this._startFrameRate = newFrameRate;
            this.x = newPosition.x;
            this.y = newPosition.y;
            this.position = newPosition;
            this.InFlight = true;
            this.visible = true;
        };
        Explosion.prototype.start = function () {
            this._duration = 10;
            this._defaultPostion = new objects.Vector2(-1000, -1000);
            this.Speed = 0;
            this.visible = false;
            //this._defaultPostion = new Vector2(-1000, -1000);
            this.InFlight = false;
            this.Reset();
        };
        Explosion.prototype.update = function () {
        };
        Explosion.prototype.updateFrame = function (newFrameRate) {
            if (this.InFlight) {
                this.x -= this.Speed;
            }
            if (newFrameRate > (this._startFrameRate + 1 * this._duration)) {
                this.visible = false;
            }
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map