function addInventory(type) {
  let inventoryCount = parseInt($(`#${type}-inventory`).text());
  inventoryCount++;
  $(`#${type}-inventory`).text(inventoryCount);
}

function removeInventory(type) {
  if (this.inventoryCount <= 0) return;

  this.inventoryCount = parseInt(
    $(`.${this.type}.box-inventory > #soil-inventory`).text()
  );
  this.inventoryCount--;
  $(`.${this.type} .box-inventory > #soil-inventory`).text(this.inventoryCount);
}

function getTileTypeByFullClass(classAttr) {
  let type = classAttr.substring(0, classAttr.indexOf(" "));
  return type;
}

$(document).ready(function() {
  $(".tile")
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

      if (!pickedTool.checkDependency(e.target)) return;

      addInventory(type);
      e.target.setAttribute("class", "sky tile");

      tailsMatrix[parseInt(e.target.getAttribute("row"))][
        parseInt(e.target.getAttribute("col"))
      ] = new Sky();
    });
});
