radio.onReceivedNumber(function (receivedNumber) {
    let ReceivedNumber = 0
    if (ReceivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (ReceivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
basic.forever(function () {
    radio.setGroup(1)
    radio.setGroup(0)
})
