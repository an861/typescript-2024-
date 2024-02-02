function twosum(num : number): number{
    return num + 2
}
twosum(5)

let getUppercase = (value : string): string => {
    return value.toUpperCase()
}
getUppercase("ankita")

let signUpUser = (name : string, email : string, isUser: boolean = true): string => {
    if(isUser == false){
        return "No User"
    }
    else{
        return name
    }
}
signUpUser("ankita", "ank@vbv.com")


// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
// void -> doesn’t have a return value


let fruits = ["apple", "banana", "mango"]

// array.map(iterator => {return ``})
fruits.map((f : string) : string => {
    return `the fruit is ${f}`
})

let consoleError = (errmsg : string): void  => {
    console.log(errmsg);
}

let handleError = (errmessg : string) : never => {
    throw new Error(errmessg)
}

export{}