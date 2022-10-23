import { lerp, getMousePos } from './utils.js';

// Track the mouse position
let mouse = {x: 0, y: 0};
window.addEventListener('mousemove', event => mouse = getMousePos(event));

export default class Cursor {
    constructor(el) {
        this.cursor = el;

        document.addEventListener('mousemove', event => {
            this.cursor.left = event.pageX + 'px';
            this.cursor.top = event.pageY + 'px';
        })
    }
}