// Canvas
import { canvas, ctx } from "./canvas.js";
// Models
import { Player, playerHeight, playerWidth } from "./models/Player.js";

// Create the human player object
const player_human = new Player(
    canvas.height - (2 * playerHeight),
    (canvas.width - playerWidth) / 2,
    canvas.height - playerHeight,
    "#0095DD"
);

// Create the AI player object
const player_AI = new Player(
    playerHeight,
    (canvas.width - playerWidth) / 2,
    0,
    "red"
);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player_human.draw();
    player_AI.draw();

    requestAnimationFrame(draw);
}

draw();

