// Canvas
import { canvas, ctx } from "./canvas.js";
// Models
import { Player, playerHeight, playerWidth } from "./models/Player.js";
import { Bullet, bulletRadius } from "./models/Bullet.js";
import { Bullets } from "./models/Bullets.js";
import { Id } from "./models/Id.js";
// Closures
import { ai_motion } from "./closures/ai_motion.js";
// Player Controls
import { 
    keyDownHandler, keyUpHandler, mouseMoveHandler,
    leftPressed, rightPressed
} from "./playerControls.js";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", (ele) => mouseMoveHandler(ele, player_human, canvas), false);

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

    // Human Player Motion detection and barriers
    if(player_human.motion()) {
        if (rightPressed && player_human.x_body < canvas.width - playerWidth) {
            player_human.x_body += 7;
        }
        else if (leftPressed && player_human.x_body > 0) {
            player_human.x_body -= 7;
        }
    }
    // AI Player Motion detection and barriers
    // When the direction of the AI player is 1, it moves right
    // and moves left when it's -1
    if (ai_motion.get() === 1 && player_AI.x_body < canvas.width - playerWidth) {
        player_AI.x_body += 7;
        if (player_AI.x_body > canvas.width - playerWidth) {
            ai_motion.change();
        }
    }
    else if (ai_motion.get() === -1 && player_AI.x_body > 0) {
        player_AI.x_body -= 7;
        if (player_AI.x_body < 0) {
            ai_motion.change();
        }
    }

    requestAnimationFrame(draw);
}

draw();

