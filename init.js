const counter = document.getElementById("counter");
const life = document.getElementById("life");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const preview = new Preview("preview");

const game = new Game(canvas, ctx, preview, counter);

game.draw();

canvas.addEventListener("click", game.onClick);