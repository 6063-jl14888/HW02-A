function setup() {
    createCanvas(800, 800);
    background(255);
}

function draw() {
    fill(0)
    quad(50, 50, 650, 55, 645, 650, 50, 650)

    fill(246, 230, 204)

    triangle(50, 650, 50, 240, 325, 242)
    triangle(650, 55, 647, 460, 371, 460)

    triangle(50, 50, 648, 55, 458, 283+50)
    triangle(645, 650, 51, 650, 238, 372)
}