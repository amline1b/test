let tafel_van_3 = 0
basic.showNumber(0)
basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
})
basic.forever(function () {
    if (tafel_van_3 <= 12) {
        tafel_van_3 += 3
        basic.pause(100)
    } else {
        tafel_van_3 = 0
    }
})
