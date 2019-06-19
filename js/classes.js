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
}

class Grass extends Tile {
  constructor() {
    super();
    this.type = "grass";
    this.dependency = ["soil", "grass"];
    this.url = "./img/teil";
  }
}

class Stone extends Tile {
  constructor() {
    super();
    this.type = "stone";
    this.dependency = ["soil", "grass", "stone"];
    this.url = "./img/teil";
  }
}

class Soil extends Tile {
  constructor() {
    super();
    this.type = "soil";
    this.dependency = ["soil", "grass"];
    this.url = "./img/teil";
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
    this.url = "./img/teil";

    super(type, dependency, url);
  }
}