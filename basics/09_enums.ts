// when we want to set a specific value for a variable then go with enum

// using const will reduce the amount of js code

const enum SeatType {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 3,
    FOURTH = "fourth"
}

let check = SeatType.MIDDLE
console.log(check)

const enum Direction {
    up = 1,
    down = -1,
    left = 2,
    right = 7
}

let d = Direction.left
console.log(d)