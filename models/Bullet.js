import { ctx } from "../canvas.js";

export let bulletRadius = 10;

export class Bullet {
    constructor(x, y, spd, color) {
        this.x = x;
        this.y = y;
        this.spd = spd;
        this.color = color;
    }
    stopMotion() {
        this.x = 0;
        this.y = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, bulletRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};