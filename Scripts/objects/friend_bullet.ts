module objects {
    export class Friend_bullet extends objects.GameObject {

        //PRIVATE INSTANCE VARIABLES
        private _defaultPostion: objects.Vector2;
        private _speed: number;
        private _inFlight: boolean;

        //PUBLIC PROPERTIES
        get Speed(): number {
            return this._speed;
        }


        set Speed(newSpeed: number) {
            this._speed = newSpeed;
        }


        get InFlight(): boolean {
            return this._inFlight;
        }

        set InFlight(newState: boolean) {
            this._inFlight = newState;
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of player_bullet.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString)

            this.start();
        }
        //PRIVATE METHODS
        /**
         * rest the bullet
         * 
         * @private
         * @method _reset
         * @return void
         */
        public Reset(): void {
            this.position = this._defaultPostion;
            this.x = this.position.x;
            this.y = this.position.y;
            this.InFlight = false;
        }

        /**
      * check the bullet bounds
      * 
      * @private
      * @method _checkBounds
      * @return void
      */

        private _checkBounds(): void {
            //decide when fly out of right side of 
            if (this.position.x >= 1000 - this.width) {
                this.Reset();
            }
        }
        //PUBLIC METHODS

        /**
            * this method trigger the bullet.
            * 
            * @private
            * @method Fire
            * @param Vector2
            * @return void
            */

        public Fire(newPosition: Vector2): void {

            this.x = newPosition.x;
            this.y = newPosition.y;
            this.position = newPosition;
            this.InFlight = true;
        }


        public start(): void {
            this._defaultPostion = new Vector2(-1000, -1000);
            this.Speed = 12;

            //this._defaultPostion = new Vector2(-1000, -1000);
            //this.InFlight = false;
            this.Reset();
        }

        public update(): void {

            if (this.InFlight) {
                this.x += this.Speed;

            }
            this.position = new Vector2(this.x, this.y);

            this._checkBounds();

        }


    }
}