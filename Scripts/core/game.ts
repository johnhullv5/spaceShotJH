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
    export let toLevel3: number = 600;

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


        let atlasData = {

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
                "enemy_bullet": { "frames": [7] },
                "player": { "frames": [8] },
                "startButton": { "frames": [9] }
            }

        };
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