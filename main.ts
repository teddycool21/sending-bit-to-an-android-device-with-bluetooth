bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
basic.showString("Hello!")
bluetooth.startAccelerometerService()
bluetooth.startMagnetometerService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
