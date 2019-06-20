class World {
  constructor() {
    this.tailSize = tailSize;
    this.numOfRows = numOfRows;
    this.numOfCols = numOfCols;
    this.tailsMatrix = tailsMatrix;
  }

  addRow(rowArr) {
    for (let i = 0; i < this.numOfCols; i++) {
      tailsMatrix[i].push(rowArr[i]);
    }
  }

  addCol(colArr) {
    tailsMatrix.push(colArr);
  }

  buildWord() {
    tailsMatrix()
  }
}

class Tile {
  constructor() {
    this.type;
    this.dependency;
    this.url;
  }

  checkDependency(type) {
    return this.dependency.includes(type);
  }

  getType() {
    return this.type;
  }

  getHtmlElement() {
    return $(`<div class="b-row"></div>`).css(
      "background-image",
      `url(${this.url})`
    );
  }
}

class Grass extends Tile {
  constructor() {
    super();
    this.type = "grass";
    this.dependency = ["soil", "grass"];
    this.url = "../img/tile/grass.png";
  }
}

class Stone extends Tile {
  constructor() {
    super();
    this.type = "stone";
    this.dependency = ["soil", "grass", "stone"];
    this.url = "../img/tile/stone.png";
  }
}

class Soil extends Tile {
  constructor() {
    super();
    this.type = "soil";
    this.dependency = ["soil", "grass"];
    this.url = "../img/tile/grass-earth.png";
  }
}

class TreeTrunk extends Tile {
  constructor() {
    super();
    this.type = "treeTrunk";
    this.dependency = ["treeTrunk", "grass"];
    this.url = "./img/teil";
  }
}

class TreeBranch extends Tile {
  constructor() {
    this.type = "treeBranch";
    this.dependency = ["treeTrunk"];
    this.url = "../img/tile/";

    super(type, dependency, url);
  }
}

class Tool {
  constructor() {
    this.type;
    this.dependency;
  }

  checkDependency(type) {
    return this.dependency.includes(type);
  }
}

class PickAxe extends Tool {
  constructor() {
    super();
    this.type = "PickAxe";
    this.dependency = ["Stone"];
  }
}

class Shovel extends Tool {
  constructor() {
    super();
    this.type = "Shovel";
    this.dependency = ["grass", "soil"];
  }
}

class Axe extends Tool {
  constructor() {
    super();
    this.type = "Axe";
    this.dependency = ["treeTrunk"];
  }
}


// console.log($("#soil-inventory").text());

function AddInventory(inventory){
  let inventoryCount=parseInt($(inventory).text());
  inventoryCount++;
  return inventoryCount;
}


function RemoveInventory(inventory){
  let inventoryCount=parseInt($(inventory).text());
  return inventoryCount--;
}

let inventory_id="#soil-inventory"; //id of the selected inventory to add/remove
let x=AddInventory(inventory_id);
x=RemoveInventory(inventory_id);


