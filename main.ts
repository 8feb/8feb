input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.soundLevel())
    basic.pause(1000)
    basic.clearScreen()
})
