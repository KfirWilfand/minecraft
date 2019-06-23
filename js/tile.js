let inventoryPlacementType;
let pickedInventoryItem;
let isInventoryOnPlacement = false;
let tile;
let isTilePermitToPlacement = false;

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

$(document).ready(function() {
  $(".tile.b-cell")
    .mouseover(function(e) {
      let row = parseInt(e.target.getAttribute("row"));
      let col = parseInt(e.target.getAttribute("col"));
      $(this).css("border", "1px dashed black");
      pickedTool.checkDependency(e.target)
        ? pickedTool.setToolPermitted()
        : pickedTool.setToolUnPermitted();

      if (!isInventoryOnPlacement) return;
      if (
        tile.checkDependency(tailsMatrix[row + 1][col].type) &&
        tailsMatrix[row][col].type == "sky"
      ) {
        $(e.target).css("border", "1px dashed green");
        isTilePermitToPlacement = true;
      } else {
        $(e.target).css("border", "1px dashed red");
        isTilePermitToPlacement = false;
      }
    })
    .mouseout(function(e) {
      $(this).css("border", "none");
      pickedTool.setToolRegular();
    })
    .click(function(e) {
      let row = parseInt(e.target.getAttribute("row"));
      let col = parseInt(e.target.getAttribute("col"));

      if (isInventoryOnPlacement) {
        if (!isTilePermitToPlacement) return;
        $(e.target).attr("class", `${inventoryPlacementType} tile b-cell`);

        tailsMatrix[row][col] = tile;
        return;
      } else {
        let type = getTileTypeByFullClass(e.target.getAttribute("class"));

        if (!pickedTool.checkDependency(e.target)) return;

        addInventory(type);
        e.target.setAttribute("class", "sky tile");

        tailsMatrix[row][col] = new Sky();
      }
    });

  $(".tile.box-inventory").click(function(e) {
    isInventoryOnPlacement = true;
    inventoryPlacementType = getTileTypeByFullClass(
      e.target.getAttribute("class")
    );

    let inventoryCount = parseInt(
      $(`#${inventoryPlacementType}-inventory`).text()
    );
    if (inventoryCount <= 0) return;

    pickedInventoryItem = $(this);
    $(pickedInventoryItem).addClass("box-inventory-picked");
    tile;

    switch (inventoryPlacementType) {
      case "soil":
        tile = new Soil();
        break;
      case "grass":
        tile = new Grass();
        break;
      case "stone":
        tile = new Stone();
        break;
      case "treeTrunk":
        tile = new TreeTrunk();
        break;
      case "treeBranch":
        tile = new TreeBranch();
        break;
    }
  });

  $(document).mousemove(function(e) {
    if (!isInventoryOnPlacement) return;
    $(".cursor")
      .addClass(`${inventoryPlacementType}`)
      .show()
      .css({
        left: e.clientX,
        top: e.clientY
      });
  });

  $("#main-board").click(function(e) {
    if (!isInventoryOnPlacement) return;
    if (!isTilePermitToPlacement) return;

    $(pickedInventoryItem).removeClass("box-inventory-picked");
    $(".cursor").hide();
    removeInventory(inventoryPlacementType);
    isInventoryOnPlacement = false;
  });
});
