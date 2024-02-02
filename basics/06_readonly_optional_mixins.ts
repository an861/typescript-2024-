// readonly -> we can only read it, can't update or modify the variable [readonly _variablename]
//  ? before : it makes that variable optional [?:]
// if we have multiple user defined types, we can club those inot one type using '&'

type User = {
    readonly _id : number  // making the variable as readonly
    name : string
    age : number
    isActive : boolean
    creditcard ?: number  // making variable as optional
}

let Myuser : User = {
    _id : 123,
    name : "Ankita",
    age : 25,
    isActive : true
}

Myuser.age = 78
// Myuser._id = 8  // this _id is a readonly property


// MIXINS
type CreditCardNumber = {
    card_number : number
}

type CreditCardDate = {
    cardDate : string
}

type CardDetails = CreditCardNumber & CreditCardDate & {
    cardcvv : number
}