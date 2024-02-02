// Just like OOPS interface with abstract methods only which needs to be defined in child

// can use Interface in function as arguments and class as data members

// Diffreencew between INTERFACE & TYPE ALIAS -> Extending, adding new fields

interface User{
    readonly id : number
    name : string
    email : string
    carddeatils ?: string
    // startTrial() : string    //METHOD 1
    startTrail : () => string   //METHOD 2
    getCoupons ?: (couponcode : string, codenumber : number) => number
}


interface User{
    isvalid : boolean
}

const MyInterface : User = {
    id : 22,
    name : "ankita",
    email : "a@jksa.com",
    startTrail : () => {
        return "Trial started"
    },
    isvalid : true
    // getCoupons : (couponcode : "ankita10", codenumber : 467) =>{
        //     return 10
        // }
    }
    

// use Inheritance
    
// Extending interface 
interface Animal{
    name : string
}

interface Bear extends Animal{
    honey : boolean
}

// const bear = getBear()