input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
