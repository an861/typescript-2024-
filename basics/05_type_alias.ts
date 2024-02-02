// Type Alias -> User defined type

// type User = {
//     name : string
//     age : number
//     isactive : boolean
// }


// function create_new_user(user : User){
//     return user
// }

// create_new_user({name : "Ankita", age : 25, isactive : true})

type Coordinate = {
    x : number
    y : number
}

function printCordinate(pt: Coordinate){
    console.log("The cordinate for x is : ", pt.x)
    console.log("the coordinate for y is : ", pt.y)
}

printCordinate({x : 10, y : 20})


type X = number | string

