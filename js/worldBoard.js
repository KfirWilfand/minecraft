$(document).ready(function() {
  let tailsMatrix = [
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Grass(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass()]
  ];

  let tailSize = 30;
  let world = new World(tailsMatrix, tailSize);
  world.build();
});
