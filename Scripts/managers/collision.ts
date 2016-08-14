module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(prime: objects.GameObject, other: objects.GameObject, newFrameRate: number = 0) {
            //check to see if object is colliding
            if (objects.Vector2.distance(prime.position, other.position) < (prime.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    // if prime object collides with enemy1
                    if (other.name === "enemy1") {
                        createjs.Sound.play("enemy1_sound");
                        core.lives -= 1;
                    }

                    if (other.name === "enemy2") {
                        createjs.Sound.play("enemy1_sound");
                        core.lives -= 1;
                    }

                    if (other.name === "enemy3") {
                        createjs.Sound.play("enemy1_sound");
                        core.lives -= 1;
                    }

                    if (other.name === "enemy2_bullet") {
                        createjs.Sound.play("enemy1_sound");
                        core.lives -= 1;
                    }

                    if (other.name === "enemy3_bullet") {
                        prime.damage();
                        if (!prime.getValidity()) {
                            createjs.Sound.play("enemy1_sound");
                            core.lives -= 1;

                        }

                    }

                    // if prime collides with diamond
                    if (other.name === "diamond") {
                        createjs.Sound.play("diamond_sound");
                        core.score += 100;
                        other.visible = false;
                    }

                    //  if prime collides with bullet
                    if (other.name === "player_bullet") {
                        createjs.Sound.play("diamond_sound");
                        prime.Reset();
                        other.Reset();
                        core.score += 666;

                    }

                    if (other.name === "player_bullet_update") {
                        createjs.Sound.play("diamond_sound");
                        prime.destroy();
                        //prime.ResetFrameRate(newFrameRate);
                        other.Reset();
                        core.score += 999;

                    }

                }
            }
            else {
                other.isColliding = false;

            }

        }
    }
}