let tailsMatrix = [
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new TreeBranch(),new TreeBranch(), new TreeBranch(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new TreeBranch(),new TreeBranch(), new TreeBranch(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new TreeBranch(),new TreeBranch(), new TreeBranch(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new TreeTrunk(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new TreeTrunk(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Stone(), new Stone(), new Sky(), new Sky(), new Sky(), new Sky(),new TreeTrunk(), new Sky(), new Stone(), new Sky()],
    [new Soil(), new Soil(),new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(), new Soil(),new Soil(), new Soil(), new Soil()],
    [new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(), new Soil(),new Soil(), new Soil(), new Soil()],
    [new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(),new Soil(), new Soil(), new Soil(),new Soil(), new Soil(), new Soil()],
  ];

  let tailSize = 30;
  let world = new World(tailsMatrix, tailSize);

$(document).ready(function() {
  world.build();
});
