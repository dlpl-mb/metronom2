input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
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
