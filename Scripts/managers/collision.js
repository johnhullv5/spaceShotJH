var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (prime, other) {
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
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map