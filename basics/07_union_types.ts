// datatypes -> built-in & user-defined
// When we do not know what type a variable can be, we can use UNION TYPES (|) instead of any. 


// built-in datatypes
let score : number | string= '10'
score = 89
score = "bskd"


// user-defined datatypes
type User = {
    name : string
    is_active : boolean
}

type Admin = {
    username : string
    is_active : boolean
}

let ankita : User | Admin = {
    name : "Ankita", is_active : true
}
ankita = {
    username : "ankita@hkwsak", is_active : false
}

// function

// function check(variable : string | number ){  // variable becomes a combo datatype of string and number
//     let s = variable.toUpperCase()
//     return s
// }

function check(variable: string | number){
    if (typeof variable === "number"){
        variable.valueOf()
    }
    else{
        if(typeof variable === "string"){
            variable.toUpperCase()
        }
    }
}

check("ankita")


// array using union types
let items : (string | number | boolean)[] = ["1", "abjd", "absxb", 89, true]
let kite : Array<string | number> = ["sbbjas", 739279]

// literals
let seatAllotment : "aisle" | "window" | "middle"

seatAllotment = "aisle"
// seatAllotment = "crew" // crew is not a type of seatAllotment


// setting constants
let pi : 3.14 = 3.14

