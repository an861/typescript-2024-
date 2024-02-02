// 'as' is for type assertion. Original syntax was incompatible with JSX & TS

let num = 10 as number

// TYPE ASSERTION
let sum = (a:number, b : number): number => {return a+b}
let result = sum(2, 3)