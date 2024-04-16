joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    send_ble_message(3)
})
bluetooth.onBluetoothConnected(function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.showString("B")
    CONNECTED = 1
})
bluetooth.onBluetoothDisconnected(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    CONNECTED = 0
})
input.onButtonPressed(Button.A, function () {
    send_ble_message(5)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    send_ble_message(4)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
    send_ble_message(0)
})
input.onButtonPressed(Button.B, function () {
    send_ble_message(6)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    send_ble_message(2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    send_ble_message(1)
})
function send_ble_message (num: number) {
    if (CONNECTED == 1) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        bluetooth.uartWriteNumber(num)
    }
}
let CONNECTED = 0
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
joystickbit.initJoystickBit()
CONNECTED = 0
