class World {
  constructor(tailsMatrix, tailSize) {
    this.tailSize = tailSize;
    this.tailsMatrix = tailsMatrix;
  }

  addRow(rowArr) {
    // for (let i = 0; i < this.numOfCols; i++) {
    //   tailsMatrix[i].push(rowArr[i]);
    // }
  }

  addCol(colArr) {
    // tailsMatrix.push(colArr);
  }

  build() {
    this.tailsMatrix.forEach(rowArr => {
      rowArr.forEach(tile => {
        $("#main-board").append(tile.getHtmlElement());
      });
    });

    $("#main-board")
      .css(
        "grid-template-rows",
        `repeat(${this.tailsMatrix.length},${this.tailSize}px)`
      )
      .css(
        "grid-template-columns",
        `repeat(${this.tailsMatrix[0].length},${this.tailSize}px)`
      );
  }
}

class Tile {
  constructor() {
    this.type;
    this.dependency;
  }

  checkDependency(type) {
    return this.dependency.includes(type);
  }

  getType() {
    return this.type;
  }

  getHtmlElement() {
    return $(`<div class="${this.type} tile"></div>`);
  }
}

class Grass extends Tile {
  constructor() {
    super();
    this.type = "grass";
    this.dependency = ["soil", "grass"];
  }
}

class Stone extends Tile {
  constructor() {
    super();
    this.type = "stone";
    this.dependency = ["soil", "grass", "stone"];
  }
}

class Soil extends Tile {
  constructor() {
    super();
    this.type = "soil";
    this.dependency = ["soil", "grass"];
  }
}

class TreeTrunk extends Tile {
  constructor() {
    super();
    this.type = "treeTrunk";
    this.dependency = ["treeTrunk", "grass"];
  }
}

class TreeBranch extends Tile {
  constructor() {
    super();
    this.type = "treeBranch";
    this.dependency = ["treeTrunk"];
  }
}

class Sky extends Tile {
  constructor() {
    super();
    this.type = "sky";
    this.dependency = [];
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
    this.dependency = ["stone"];
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
