var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.RULE = 1;
        Scene.LEVEL1 = 2;
        Scene.LEVEL2 = 3;
        Scene.LEVEL3 = 4;
        Scene.OVER = 5;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map