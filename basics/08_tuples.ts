// Tuples are typed array where it is mandatory to have a predefined length and order of types for each index.
// We use tuples when we exactly know how many types we allow in an array

let myTuple : [string, number, number] = ["ankita", 38, 899]

myTuple.push("bdmlml")  // tuple is a typed array so it allows all the methods of the array

let mynewTuple : readonly [string, number, number] = ["jswnkjdkw", 727, 88108]

// mynewTuple.push()  //throws error as it is readonly


// type using tuple
type User = [string, number]
let u : User = ["ankita", 37]