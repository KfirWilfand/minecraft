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
    this.tailsMatrix.forEach((rowArr, rowIndex) => {
      rowArr.forEach((tile, colIndex) => {
        $("#main-board").append(
          tile
            .getHtmlElement()
            .attr("row", rowIndex)
            .attr("col", colIndex)
        );
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
    return $(`<div class="${this.type} tile"></div>`).on("click", onClickTile);
  }
}

function onClickTile() {
  this.addTo;
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
    this.dependency = ["treeTrunk","treeBranch"];
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

  checkDependency(element) {
    let type = getTileTypeByFullClass(element.getAttribute("class"));
    let row = parseInt(element.getAttribute("row"));
    let col = parseInt(element.getAttribute("col"));

    if (!this.dependency.includes(type)) return false;
    if(tailsMatrix[row-1][col].checkDependency(type)) return false;

    return true;
  }

  setToolPermitted() {
    $(`#${this.type}`).attr(
      "class",
      "box-tools box-tools-pick box-tools-pick-permitted"
    );
  }

  setToolUnPermitted() {
    $(`#${this.type}`).attr(
      "class",
      "box-tools box-tools-pick box-tools-pick-un-permitted"
    );
  }

  setToolRegular() {
    $(`#${this.type}`).attr("class", "box-tools box-tools-pick");
  }
}

class PickAxe extends Tool {
  constructor() {
    super();
    this.type = "pickAxe";
    this.dependency = ["stone"];
  }
}

class Shovel extends Tool {
  constructor() {
    super();
    this.type = "shovel";
    this.dependency = ["treeBranch","grass", "soil"];
  }
}

class Axe extends Tool {
  constructor() {
    super();
    this.type = "axe";
    this.dependency = ["treeTrunk"];
  }
}
