function getTileTypeByFullClass(classAttr) {
  let type = classAttr.substring(0, classAttr.indexOf(" "));
  return type;
}

function checkTilePermitToPlacement(row, col) {
  let type = getTileTypeByFullClass(e.target.getAttribute("class"));

  if (row + 1 >= tailsMatrix.length) return false;
  if (!tile.checkDependency(tailsMatrix[row + 1][col].type)) return false;
  if (tailsMatrix[row][col].type != "sky") return false;

  return false;
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

      if (checkTilePermitToPlacement(row, col)) {
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
});
