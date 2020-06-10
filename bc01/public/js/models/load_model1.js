function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var scene = new BABYLON.Scene(engine);
let sceneFirstFloor = null;
let sceneSecondFloor = null;

/******* Add the create scene function ******/
var createScene = function () {

    scene.createDefaultCameraOrLight();
    sceneFirstFloor = BABYLON.SceneLoader.Append("model/", "1stFloorD.babylon", scene, function () {
        scene.createDefaultCamera(true, true, true);
        var camera = new BABYLON.ArcRotateCamera("Camera", 1.57, 0.3, 12, new BABYLON.Vector3(1.5, 0, -0.4), scene);
        //camera.setPosition(new BABYLON.Vector3(0, 13, 2));
        camera.wheelPrecision = 8.0;
        camera.attachControl(canvas, false);

        scene.clearColor = new BABYLON.Color4.FromHexString('#DADADA');

        let colors = [
            "#000000",
            "#FF7676",
            "#FF7676",
            "#E0FE47",
            "#66FE47",
            "#47FEB6",
            "#47EDFE",
            "#478FFE",
            "#6847FE",
            "#6400FF",
            "#D800FF",
            "#8D3F76",
            "#A60390",
            "#900C3F",
            "#FFC300",
            "#DAF7A6",
            "#C70039",
            "#FF5733",
            "#e5b224",
            "#927011",
            "#699211",
            "#11925a",
            "#119285",
            "#113192",
            "#4d1192",
            "#901192",
        ];

        for (i = 0; i < scene.meshes.length; i++) {
            //console.log(i);
            //console.log("var cube" + i + " = scene.getMeshByID('Cube" + i + "')");
            eval("var cube" + i + " = scene.getMeshByID('Cube" + i + "')");
            //console.log ("var material_cube" +  i + " = new BABYLON.StandardMaterial('material" + i + "', scene)");
            eval("var material_cube" + i + " = new BABYLON.StandardMaterial('material" + i + "', scene)");
            //console.log ("material_cube" + i + ".diffuseColor = new BABYLON.Color3.FromHexString('"+ colors[i] +"')");
            eval("material_cube" + i + ".diffuseColor = new BABYLON.Color3.FromHexString('" + colors[i] + "')");
            //console.log ("cube" + i + ".material = material_cube" + i);
            eval("cube" + i + ".material = material_cube" + i);
        }
    });
    sceneSecondFloor = BABYLON.SceneLoader.Append("model/", "2ndFloorD.babylon", scene, function () {
        scene.createDefaultCamera(true, true, true);
        var camera = new BABYLON.ArcRotateCamera("Camera", 1.57, 0.3, 12, new BABYLON.Vector3(1.5, 0, -0.4), scene);
        //camera.setPosition(new BABYLON.Vector3(0, 13, 2));
        camera.wheelPrecision = 8.0;
        camera.attachControl(canvas, false);

        scene.clearColor = new BABYLON.Color4.FromHexString('#DADADA');

        let colors = [
            "#000000",
            "#FF7676",
            "#FF7676",
            "#E0FE47",
            "#66FE47",
            "#47FEB6",
            "#47EDFE",
            "#478FFE",
            "#6847FE",
            "#6400FF",
            "#D800FF",
            "#8D3F76",
            "#A60390",
            "#900C3F",
            "#FFC300",
            "#DAF7A6",
            "#C70039",
            "#FF5733",
            "#e5b224",
            "#927011",
            "#699211",
            "#11925a",
            "#119285",
            "#113192",
            "#4d1192",
            "#901192",
        ];

        for (i = 0; i < scene.meshes.length; i++) {
            //console.log(i);
            //console.log("var cube" + i + " = scene.getMeshByID('Cube" + i + "')");
            eval("var cube" + i + " = scene.getMeshByID('Cube" + i + "')");
            //console.log ("var material_cube" +  i + " = new BABYLON.StandardMaterial('material" + i + "', scene)");
            eval("var material_cube" + i + " = new BABYLON.StandardMaterial('material" + i + "', scene)");
            //console.log ("material_cube" + i + ".diffuseColor = new BABYLON.Color3.FromHexString('"+ colors[i] +"')");
            eval("material_cube" + i + ".diffuseColor = new BABYLON.Color3.FromHexString('" + colors[i] + "')");
            //console.log ("cube" + i + ".material = material_cube" + i);
            eval("cube" + i + ".material = material_cube" + i);
        }
    });

    return scene;
};
/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});

window.addEventListener("click", function () {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    console.log(pickResult.pickedMesh.id);
});
