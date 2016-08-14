module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Shield extends objects.GameObject {
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

        private _currentLives: number;
        private _isValid:boolean;

        constructor(imageString: string) {
            super(imageString)

            this.start();
        }

        get CurrentLives():number{
            return this._currentLives;
        }

        set CurrentLives(newLives:number){
          
            this._currentLives = newLives;
           
        }

        public decreaseArmors(newLives:number,player:objects.Player){
              var lives = this._currentLives;
              this.CurrentLives = newLives;
              if(player.damageArmor()){
                   player.numOfArmors-=1;
                    this.visible = false;

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
            if (this.y <= (0 - (this.height * 0.5))) {
                this.y = (0 - (this.height * 0.5));
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
            this.y = 300;

            this.position.x = this.x;
            this.position.y = this.y;

            this.CurrentLives = 5;
            this.visible = false;
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
           
        }

        public updateState(currentLives:number){
            this.CurrentLives =  currentLives;
             this.position = new Vector2(this.x, this.y);

            // if (objects.Player.isActivate) {
            //     this.y = core.stage.mouseY;
            //     this.x = core.stage.mouseX;
            // }
            this.y = core.stage.mouseY;
            this.x = core.stage.mouseX;
            this._checkBounds();

        }
    }
}