$('.box_tools').not('.box_tile').click(function () {
    $(this).toggleClass('box_border_blue');
});


$('.box_tools').not('.box_tile').hover(function () {
    $(this).toggleClass('box_border_red');
});

$("body").click(function (event) { //get id of item clicked 
    console.log("clicked: " + event.target.id);
});

// $('.tile').click(function (event) { //get id of item clicked 
//     console.log("clicked: " + event.target.id);

// });

let board = document.getElementsByClassName('row board tile');


// for (let i = 0; i < 48; i++) {
//     let tile = document.createElement('div');
//     $(tile).attr("class", "col-1 b-item");
//     // $(tile).attr('id', "tile" + i);
//     board[0].appendChild(tile);
// }
// for (let i = 0; i < 24; i++) {
//     let tile = document.createElement('div');
//     $(tile).attr("class", "col-1 b-tile-item");
//     // $(tile).attr('id', "tile" + i);
//     board[0].appendChild(tile);
// }

$('.box_tools').not('.box_tile').click(function () {
    $(this).toggleClass('box_border_blue');
});


$('.box_tools').not('.box_tile').hover(function () {
    $(this).toggleClass('box_border_red');
});

$("body").click(function (event) { //get id of item clicked 
    console.log("clicked: " + event.target.id);
});



