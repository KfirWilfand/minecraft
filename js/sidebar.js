let pickedTool = new PickAxe();
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

function cancelTileCursor() {
  $(pickedInventoryItem).removeClass("box-inventory-picked");
  $(".cursor").hide();
  isInventoryOnPlacement = false;
}

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

  $(".tile.box-inventory").click(function(e) {
    if (isInventoryOnPlacement) {
      cancelTileCursor();
      return;
    }
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

    cancelTileCursor();
    removeInventory(inventoryPlacementType);
  });
});
