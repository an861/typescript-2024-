// 2 ways to declare arrays

// const s  = [] // never

// const arrayname: datatype[] = []  SYNTAX- 1

const fruits: string[] = []

fruits.push("pikachu")
fruits.push("batashi")

// const arrayname : Array<datatype> = []  SYNTAX - 2

const cars: Array<string> = []

cars.push("BMW")
cars.push("Tesla")

// declare array using user defined type

type User = {
    name : string
    ispaid : boolean
}

const user1 : Array<User> = []
const user2 : User[] = []

user1.push({name : "Ankita", ispaid : true})
user2.push({name : "Saha", ispaid : false})

