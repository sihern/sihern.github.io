var board_size = 8;
var canvas_size = 600;
var square_length = canvas_size / board_size;
var board_color_dark = 130;
var board_color_light = 255;

function setup() {  
    createCanvas(canvas_size, canvas_size);
    background(255, 0, 0, 128);
    create_board();
    create_border();
}
function create_board(){
    //draw board
    draw_board();

    //draw numbers
    // draw_numbers();
    //TODO: draw letters
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
            if ( (x_value + y_value) % 2 == 0) {
                fill(board_color_light); //set fill to white
            } else {
                fill(board_color_dark); //set fill to black
            }
            draw_square(x_value,y_value);
           
        }
    }
}

function draw_square(x, y) {
    rect(x * square_length, y * square_length, square_length, square_length);
}
var frame_count = 0;
var rate = 2;

// function draw() {
//     frame_count = frame_count + 1;
//     print(frame_count);
//     if (frame_count % rate == 0) {
//       draw_it();  
//     } else {  
//     }
// }

// function draw_it() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 40, 40);
// }
