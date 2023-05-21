//https://www.youtube.com/watch?v=hgReGsh5xVU
import kaboom from "kaboom";
import birdy from "./sprites/birdy.png"
import bg from "./sprites/bg.png"
import pipe from "./sprites/pipe.png"

const k = kaboom({
  height: 500,
  width: 500
})

// load a sprite "bean" from an image
loadSprite("birdy", birdy)
loadSprite("bg", bg)
loadSprite("pipe", pipe)

// add bg
add([sprite("bg", {width: width(), height: height()})])


// add something to screen
const player = add([
    sprite("birdy"),
    scale(2),
    pos(80, 40),
    area(),
    body()
])

const PIPE_GAP = 120;

const offset = rand(-50, 50)


// bottom pipe
add([sprite("pipe"), pos(width() - 100, height()/2 + offset + PIPE_GAP / 2), "pipe", area()])

// top pipe
add([sprite("pipe", {flipY: true}), pos(width() - 100, height()/2 + offset - PIPE_GAP /2), k.origin('botleft'), "pipe", area()])


action("pipe", (pipe) => {
    pipe.move(-160, 0);
})

player.onCollide("pipe", () => {
    debug.log('collided' )
})

keyPress("space", () => {
    player.jump()

})