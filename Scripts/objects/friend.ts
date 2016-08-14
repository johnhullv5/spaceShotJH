module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Friend extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        //static isActivate: boolean = false;
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        public numOfArmors: number = 3;
        private _isArmorOn: boolean = false;
        private _livesOfArmor: number = 2;
        public _sheildDamage:boolean = false;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString)

            this.start();
        }

        public getValidity(): boolean {
            return this._isArmorOn;
        }

        public armorOff(): void {
            this._isArmorOn = false;
        }

        public armorOn(): void {
            this._isArmorOn = true;
            
        }

        public getLivesOfArmor(): number {
            if (this.armorOn()) {
                return this._livesOfArmor;
            }
            else {
                return 0;
            }
        }

        public damage():void{
            this.damageArmor();

        }

        public damageArmor(): boolean {
            if (this._livesOfArmor > 0) {
                this._livesOfArmor -= 1;
            }
            if(this._livesOfArmor===0)
            {
                this.armorOff();
                this._sheildDamage = true;
                return true;
            }
            else{
                return false;
            }
            

        }




        /**
        * This method checks if the object has reached its boundaries
        * 
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        private _checkBounds(): void {
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
                this.y = (50- (this.height * 0.5));
            }

            // check bottm bounds
            if (this.y >= (628 - (this.height * 0.5))) {
                this.y = (628 - (this.height * 0.5));
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start(): void {

            this.x = 50;
            this.y = 380;

            this.position.x = this.x;
            this.position.y = this.y;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update(): void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);

            // if (objects.Player.isActivate) {
            //     this.y = core.stage.mouseY;
            //     this.x = core.stage.mouseX;
            // }
            this.y = core.stage.mouseY - this.height;
            this.x = core.stage.mouseX;
            this._checkBounds();
        }
    }
}