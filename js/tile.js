function addInventory(type) {
  let inventoryCount = parseInt($(`#${type}-inventory`).text());
  inventoryCount++;
  $(`#${type}-inventory`).text(inventoryCount);
}

function removeInventory(type) {
  let inventoryCount = parseInt($(`#${type}-inventory`).text());
  if (inventoryCount <= 0) return;

  inventoryCount--;
  $(`#${type}-inventory`).text(inventoryCount);
}

function getTileTypeByFullClass(classAttr) {
  let type = classAttr.substring(0, classAttr.indexOf(" "));
  return type;
}

let isInventoryOnPlacement = false;
$(document).ready(function() {
  $(".tile.b-cell")
    .mouseover(function(e) {
      $(this).css("border", "1px dashed black");
      pickedTool.checkDependency(e.target)
        ? pickedTool.setToolPermitted()
        : pickedTool.setToolUnPermitted();
    })
    .mouseout(function(e) {
      $(this).css("border", "none");
      pickedTool.setToolRegular();
    })
    .click(function(e) {
      let type = getTileTypeByFullClass(e.target.getAttribute("class"));
      let row = parseInt(e.target.getAttribute("row"));
      let col = parseInt(e.target.getAttribute("col"));

      if (!pickedTool.checkDependency(e.target)) return;

      addInventory(type);
      e.target.setAttribute("class", "sky tile");

      tailsMatrix[row][col] = new Sky();
    });

  $(".tile.box-inventory").click(function(e) {
    let type = getTileTypeByFullClass(e.target.getAttribute("class"));
    let inventoryCount = parseInt($(`#${type}-inventory`).text());
    if (inventoryCount <= 0) return;

    isInventoryOnPlacement = true;
    let pickedInventoryItem = $(this);
    $(pickedInventoryItem).addClass("box-inventory-picked");

    switch (type) {
        case "soil":
          pickedTool = new Soil();
          break;
        case "grass":
          pickedTool = new Grass();
          break;
        case "stone":
          pickedTool = new Stone();
          break;
        case "treeTrunk":
          pickedTool = new TreeTrunk();
          break;
        case "treeBranch":
          pickedTool = new TreeBranch();
          break;
      }

    // removeInventory(type);

    $(document)
      .mousemove(function(e) {
        if (!isInventoryOnPlacement) return;
        $(".cursor")
          .addClass(`${type}`)
          .show()
          .css({
            left: e.clientX,
            top: e.clientY
          });
      })
      .mousedown(function(e) {
        let row = parseInt(e.target.getAttribute("row"));
        let col = parseInt(e.target.getAttribute("col"));

     

        isInventoryOnPlacement = false;
        $(pickedInventoryItem).removeClass("box-inventory-picked");
        $(".cursor").hide();
      });
  });
});
