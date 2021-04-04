var board_size = 8;
var canvas_size = 600;
var square_length = canvas_size / board_size;


function setup() {  
    createCanvas(canvas_size, canvas_size);
    background(255, 0, 0, 128);
    draw_board();
}

function draw_board(){
    for (var y_value = 0; y_value <= board_size * square_length - square_length; y_value += square_length) {
        for (var x_value = 0; x_value <= board_size * square_length - square_length; x_value += square_length) {
            draw_square(x_value,y_value);
        }
    }
}

function draw_square(x, y) {
    rect(x, y, square_length, square_length);
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
