var board_size = 8;
var canvas_size = 600;
var square_length = canvas_size / board_size;
var board_color_dark = 130;
var board_color_light = 255;
var board = [];

function setup() {  
    createCanvas(canvas_size, canvas_size);
    background(255, 0, 0, 128);
    create_board();
    draw_board();
    create_border();
}
function create_board(){
    for (var y_value = 0; y_value < board_size; y_value++) {
        var board_row = [];
        for (var x_value = 0; x_value < board_size; x_value++) {
            var fill;
            if ( (x_value + y_value) % 2 == 0) {
                fill = board_color_light; //set fill to white
            } else {
                fill = board_color_dark; //set fill to black
            }
            var square = new Square (x_value,y_value, fill);  
            board_row.push(square);
        }
        board.push(board_row);
    } 
}
// function draw_numbers(){
//     for(var i = 0; i <=)
// }

function create_border (){
    stroke(50);
    fill (0, 0, 0, 0);
    rect(0, 0, canvas_size, canvas_size);
}
    
function draw_board(){
    noStroke();
    for (var y_value = 0; y_value < board_size; y_value++) {
        for (var x_value = 0; x_value < board_size; x_value++) {
            var cur_square = board[y_value][x_value];
            draw_square(cur_square);
           
        }
    }
}

function draw_square(cur_square) {
    fill(cur_square.fill_shade);
    rect(cur_square.x * cur_square.length, cur_square.y * cur_square.length, cur_square.length, cur_square.length);
}

function Square(x, y, fill_shade) {
    this.x = x;
    this.y = y;
    this.length = square_length; 
    //either dark or light
    this.fill_shade = fill_shade;
}