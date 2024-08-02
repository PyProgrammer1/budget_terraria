let txt = new Text("Budget Terraria", "20pt Arial");
let txt2 = new Text("click to start", "20pt Arial");
let txt3 = new Text("", "20pt Arial");
let img = new WebImage("https://vignette.wikia.nocookie.net/minecraft/images/0/02/Grassblock.png/revision/latest/scale-to-width-down/480?cb=20100327182509");
let bgm = new Audio("https://codehs.com/uploads/aeb2d92e81affc5d76735851eb48e792")
let bg = new WebImage("https://th.bing.com/th/id/OIP.x0j5cwlwHtgK5I0RsfF31AHaHa?rs=1&pid=ImgDetMain");
let img2 = new WebImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed9a9802-5f2e-4391-9fb0-9e3e501114ef/d7k1c60-fad8370b-100e-40e3-b492-6c2d917a967e.png/v1/fill/w_1024,h_530,q_80,strp/minecraft_sheep_by_foxcroft4321_d7k1c60-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTMwIiwicGF0aCI6IlwvZlwvZWQ5YTk4MDItNWYyZS00MzkxLTlmYjAtOWUzZTUwMTExNGVmXC9kN2sxYzYwLWZhZDgzNzBiLTEwMGUtNDBlMy1iNDkyLTZjMmQ5MTdhOTY3ZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.I1oIFfqFirUmbSa1b38IxM660uVMIQRFAiRca4h_0QY");
let blockWidth = 25
let block = new Rectangle(blockWidth, blockWidth);
let blockMap = new Grid(10, 10);
blockMap.initFromArray([
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"],
    ["grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock", "grassBlock"]
]);
////////////////////////////////////////////
class Block {
    constructor(name, hex, blastResistiance, hardness, mineableWith) {
        this.name = name;
        this.color = hex;
        this.blastResistiance = blastResistiance;
        this.hardness = hardness;
        this.tool = mineableWith;
    }
}

class Item {
    constructor(name, texture, toolType, miningSpeed) {
        this.name = name;
        this.texture = new WebImage(texture);
        if(toolType != null && miningSpeed != null) {
            this.toolType = toolType;
            this.miningSpeed = miningSpeed;
        }
    }
}
class Entity {
    constructor(name, hex, life, ai, type) {
        this.name = name;
        this.hex = hex;
        this.life = life;
        this.ai = ai;
        this.type = type;
    }
}
////////////////////////////////////////////
let dirt = new Block("Dirt", "#8b4513", 0.1, 1, "shovel");
let grassBlock = new Block("Grass Block", "#00ff00", 0.1, 1, "shovel");
let stone = new Block("Stone", "#646464", 3, 5, "pickaxe");
let cobblestone = new Block("Cobblestone", "#969696", 3, 5, "pickaxe");
let craftingTable = new Block("Crafting Table", "#966411", 1.5, 2, "axe")
let woodenPickaxe = new Item("Wooden Pickaxe", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d2/Wooden_Pickaxe_JE3_BE3.png/revision/latest?cb=20200226194132", "pickaxe", 0.2);
let stonePickaxe = new Item("Stone Pickaxe", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Stone_Pickaxe_JE2_BE2.png/revision/latest?cb=20200217234007", "pickaxe", 0.5);
let ironPickaxe = new Item("Iron Pickaxe", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Iron_Pickaxe_JE3_BE2.png/revision/latest?cb=20200105053011", "pickaxe", 1.2);
let woodenAxe = new Item("Wooden Axe", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png/revision/latest?cb=20200217234355", "axe", 0.2);
let stoneAxe = new Item("Stone Axe", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png/revision/latest?cb=20200217234417", "axe", 0.5);
let ironAxe = new Item("Iron Axe", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png/revision/latest?cb=20200217234438", "axe", 1.2);
let player = new Entity("Player", "#8b4513", 20, false, "player");
let chicken = new Entity("Chicken", "#ffffff", 6, true, "mob:passive");
let cow = new Entity("Cow", "#8b4513", 10, true, "mob:passive");
////////////////////////////////////////////
let craftingTableRecipe = new Grid(2, 2);
craftingTableRecipe.initFromArray([
    ["woodenPlanks", "woodenPlanks"],
    ["woodenPlanks", "woodenPlanks"]
]);
craftingTableRecipe.outputCount = 1;
let stickRecipe = new Grid(2, 2);
stickRecipe.initFromArray([
    ["woodenPlanks", "none"],
    ["woodenPlanks", "none"]
]);
stickRecipe.outputCount = 4;
let woodenPickaxeRecipe = new Grid(3, 3);
woodenPickaxeRecipe.initFromArray([
    ["woodenPlanks", "woodenPlanks", "woodenPlanks"],
    ["none", "stick", "none"],
    ["none", "stick", "none"]
]);
woodenPickaxeRecipe.outputCount = 1;
let stonePickaxeRecipe = new Grid(3, 3);
stonePickaxeRecipe.initFromArray([
    ["cobblestone", "cobblestone", "cobblestone"],
    ["none", "stick", "none"],
    ["none", "stick", "none"]
]);
stonePickaxeRecipe.outputCount = 1;
let ironPickaxeRecipe = new Grid(3, 3);
ironPickaxeRecipe.initFromArray([
    ["ironIngot", "ironIngot", "ironIngot"],
    ["none", "stick", "none"],
    ["none", "stick", "none"]
]);
ironPickaxeRecipe.outputCount = 1;
let woodenAxeRecipe = new Grid(3, 3);
woodenAxeRecipe.initFromArray([
    ["woodenPlanks", "woodenPlanks", "none"],
    ["woodenPlanks", "stick", "none"],
    ["none", "stick", "none"]
]);
woodenAxeRecipe.outputCount = 1;

var menu = "titleScreen";

function start() {
    setSize(250, 250);
    img2.setSize(204.8/2, 106/2);
    img2.setPosition(0, getHeight()-img2.getHeight());
    bg.setSize(250, 250);
    bgm.play();
    bgm.loop = true;
    img.setSize(480/5, 480/5);
    img.setPosition(getWidth()/2, getHeight()/2);
    txt.setPosition(0, getHeight()*(1/4));
    txt.setText("Budget Terraria");
    txt2.setPosition(0, txt.getY()+100);
    txt2.setText("click to start");
    txt2.setColor(Color.cyan);
    txt.setColor(Color.green);
    add(bg);
    add(txt);
    add(txt2);
    add(img);
    add(img2);
    if(menu == "titleScreen") {
        mouseClickMethod(startLoading);
    }
}

function startLoading() {
    menu = "gamemodeSelect"
    remove(txt);
    remove(img);
    remove(txt2);
    remove(img2);
    txt.setText("Loading...");
    txt.setColor(Color.white);
    add(txt);
    setTimeout(stopLoading, 2000);
}

function stopLoading() {
    remove(txt);
    txt.setText("Gamemode:");
    txt.setPosition(50, txt.getHeight());
    txt2.setPosition(50, txt.getY()+txt.getHeight()+10);
    txt3.setPosition(50, txt2.getY()+txt2.getHeight()+10);
    txt3.setColor(Color.CYAN);
    txt2.setText("creative");
    txt3.setText("survival");
    add(txt);
    add(txt2);
    add(txt3);
    if(menu == "gamemodeSelect") {
        keyUpMethod(keys);
    }
}

function keys(e) {
    if(e.key == "q") {
        start();
    } else if(e.key == "ArrowUp") {
        remove(txt);
        remove(txt2);
        remove(txt3);
        remove(bg);
        startGame("c");
    } else if(e.key == "ArrowDown") {
        remove(txt);
        remove(txt2);
        remove(txt3);
        remove(bg);
        startGame("s");
    }
}

function startGame(gamemode) {
    setTimeout(1000, function() {
        gameTick();
    });
}

function renderBlock(x, y, type) {
    if(type == "dirt") {
        block.setColor(dirt.color);
    } else if(type == "grassBlock") {
        block.setColor(grassBlock.color);
    }
    block.setPosition(x, y);
    add(block);
}

function gameTick() {
    for(let i = 0; i < blockMap.numCols(); i++) {
        for(let j = 0; j < blockMap.numRows(); j++) {
            renderBlock(i*blockWidth, j*blockWidth, blockMap.get(i, j));
        }
    }
}

