let pickedTool = new PickAxe();

$(document).ready(function() {
  $(".box-tools").on("click", function() {
    $(".box-tools").attr("class", "box-tools");
    $(this).attr("class", "box-tools box-tools-pick");

    switch ($(this).attr("id")) {
      case "pickAxe":
        pickedTool = new PickAxe();
        break;
      case "axe":
        pickedTool = new Axe();
        break;
      case "shovel":
        pickedTool = new Shovel();
        break;
    }
  });
});
