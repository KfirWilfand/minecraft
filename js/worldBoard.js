$(document).ready(function() {
  let tailsMatrix = [
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    // [new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    // [new Grass(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky()],
    [new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(), new Sky(),new Sky(), new Sky(), new Sky(), new Sky()],
    // [new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass(),new Grass(), new Grass()]
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
  world.build();

  $(".tile").mouseover(function (e) {
      $(this).css("border","1px dashed black");
      if(pickedTool.checkDependency(e.target.getAttribute("class"))){
        pickedTool.setToolPermitted();
      }else{
        pickedTool.setToolUnPermitted();  
      }
  }).mouseout(function (e) {
    $(this).css("border","none");
     pickedTool.setToolRegular();
})
});
