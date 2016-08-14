/// <reference path="_reference.ts"/>

/**
 * @author Changbae Lee clee194@my.centennialcollege.ca
 * @student Chang Bae Lee(300770812), Hao Jiang(300858525)
 * @date July 31, 2016
 * @version 0.5 - Initial version of core
 * @description This file is the entry point for the game
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations




    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;
    //declare textureAtlas
    export let textureAtlas: createjs.SpriteSheet;

    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    // score and lives variables
    export let score: number = 0;
    export let highScore: number = 0;
    export let lives: number = 5;

    let helloLabel: objects.Label;

    let startButton: objects.Button; // reference to our button class

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu: scenes.Menu;
    let over: scenes.Over;
    let level1: scenes.Level1;
    let level2: scenes.Level2;
    let level3: scenes.Level3;
    export let toLevel2: number = 300;
    export let toLevel3: number = 1000;

    let rule: scenes.Rule;


    // asset manifest for images and sounds
    let assetData: objects.Asset[] = [
        //{ id: "ruleButton", src: "../../Assets/images/ruleButton.png" },
        { id: "rules", src: "../../Assets/images/instruction.png" },
        // { id: "startButton", src: "../../Assets/images/startButton.png" },
        // { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "space1", src: "../../Assets/images/space1.gif" },
        { id: "atlas", src: "../../Assets/images/atlas.png" },
        { id: "space2", src: "../../Assets/images/space2.gif" },
        { id: "space3", src: "../../Assets/images/space3.gif" },
        //{ id: "diamond", src: "../../Assets/images/diamond.png" },
        //{ id: "player", src: "../../Assets/images/player.png" },
        //{ id: "enemy1", src: "../../Assets/images/enemy1.png" },
        //{ id: "enemy2", src: "../../Assets/images/enemy2.png" },
        //{ id: "enemy3", src: "../../Assets/images/enemy3.png" },
        { id: "enemy1_sound", src: "../../Assets/audio/enemy1_sound.wav" },
        { id: "diamond_sound", src: "../../Assets/audio/diamond_sound.wav" },
        { id: "level1_bgsound", src: "../../Assets/audio/level1_bgsound.wav" },
        { id: "level2_bgsound", src: "../../Assets/audio/level2_bgsound.wav" },
        { id: "level3_bgsound", src: "../../Assets/audio/level3_bgsound.wav" }


    ];




    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void}
     */
    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event


        let atlasData2 = {

            "images": [
                // "../../Assets/images/atlas.png"
                assets.getResult("atlas")
            ],

            "frames": [
                [1, 1, 250, 188, 0, 0, 0],
                [253, 1, 170, 136, 0, 0, 0],
                [253, 139, 171, 85, 0, 0, 0],
                [425, 1, 120, 108, 0, 0, 0],
                [425, 111, 39, 11, 0, 0, 0],
                [426, 124, 80, 49, 0, 0, 0],
                [426, 175, 99, 38, 0, -12, -26],
                [508, 111, 18, 17, 0, 0, 0],
                [1, 191, 150, 49, 0, 0, 0],
                [153, 191, 87, 38, 0, -15, -26]
            ],

            "animations": {
                "enemy3": { "frames": [0] },
                "restartButton": { "frames": [1] },
                "enemy2": { "frames": [2] },
                "enemy1": { "frames": [3] },
                "player_bullet": { "frames": [4] },
                "diamond": { "frames": [5] },
                "ruleButton": { "frames": [6] },
                "enemy2_bullet": { "frames": [7] },
                "player": { "frames": [8] },
                "startButton": { "frames": [9] }
                /*"plane":{
                    "frames":[4,6,8]
                    "speed":0.5

                }*/
            }

        };

        let atlasData = {

            "images": [
                "../../Assets/images/atlas.png"
            ],

            "frames": [
                [1, 1, 277, 274, 0, 0, 0],
                [280, 1, 269, 242, 0, 0, 0],
                [280, 245, 214, 212, 0, 0, 0],
                [551, 1, 250, 188, 0, 0, 0],
                [1, 277, 170, 136, 0, 0, 0],
                [551, 191, 300, 30, 0, 0, 0],
                [551, 223, 250, 22, 0, 0, 0],
                [496, 247, 208, 198, 0, 0, 0],
                [803, 1, 171, 85, 0, 0, 0],
                [803, 88, 148, 88, 0, -2, -3],
                [706, 247, 124, 118, 0, 0, 0],
                [706, 367, 120, 65, 0, 0, -2],
                [173, 277, 94, 58, 0, 0, 0],
                [1, 415, 99, 38, 0, -12, -26],
                [173, 337, 80, 49, 0, 0, 0],
                [853, 178, 120, 108, 0, 0, 0],
                [832, 288, 150, 49, 0, 0, 0],
                [832, 339, 150, 48, 0, 0, 0],
                [828, 389, 87, 38, 0, -15, -26],
                [173, 388, 80, 45, 0, 0, 0],
                [803, 178, 39, 11, 0, 0, 0],
                [953, 88, 18, 17, 0, 0, 0]
            ],

            "animations": {
                "shield_l": { "frames": [0] },
                "explosion_l": { "frames": [1] },
                "shield_m": { "frames": [2] },
                "enemy3": { "frames": [3] },
                "restartButton": { "frames": [4] },
                "beam-l": { "frames": [5] },
                "beam_m": { "frames": [6] },
                "explosion_m": { "frames": [7] },
                "enemy2": { "frames": [8] },
                "enemy3_bullet": { "frames": [9] },
                "explosion_s": { "frames": [10] },
                "missile_round_blue_enemy_m": { "frames": [11] },
                "player_bullet_update": { "frames": [12] },
                "ruleButton": { "frames": [13] },
                "diamond": { "frames": [14] },
                "enemy1": { "frames": [15] },
                "player": { "frames": [16] },
                "friend": { "frames": [17] },
                "startButton": { "frames": [18] },
                "friend_bullet": { "frames": [19] },
                "player_bullet": { "frames": [20] },
                "enemy2_bullet": { "frames": [21] },
                "explosion": {
                    "frames": [10, 7, 1],
	                "speed": 0.1
                }
            }

        }
            ;


        //initialize textureAtlas variable
        textureAtlas = new createjs.SpriteSheet(atlasData);
        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        // call the scenes's update
        currentScene.Update();

        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the RULE Scene
            case config.Scene.RULE:
                stage.removeAllChildren();
                rule = new scenes.Rule();

                currentScene = rule;
                break;
            // Show the LEVEL1 Scene
            case config.Scene.LEVEL1:
                stage.removeAllChildren();
                level1 = new scenes.Level1();
                currentScene = level1;
                break;
            // Show the LEVEL2 Scene
            case config.Scene.LEVEL2:
                stage.removeAllChildren();
                level2 = new scenes.Level2();
                currentScene = level2;
                break;
            // Show the LEVEL3 Scene
            case config.Scene.LEVEL3:
                stage.removeAllChildren();
                level3 = new scenes.Level3();
                currentScene = level3;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++