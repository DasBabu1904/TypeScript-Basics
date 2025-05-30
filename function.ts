function myFunction(num: number) {
  let sq: number = num * num;
  return sq;
}

// let result:number=myFunction("sourav")  //wrong call parameter is number but argument passed is string
let result: number = myFunction(3);
console.log(result);

function myFunction2(num: number) {
  let sq: number = num * num;
  return "Hello";
}

//wrong!!!
let value = myFunction2(3);
console.log(result);
/*
and this dont give any error! why? because value does not have any type. we can solve this in two way
1.add type number to value
2.add return type to myFunction2()
*/

///solution
function myFunction3(num: number): number {
  return num * num;
}

let value3 = myFunction3(3);

//types in arrow functon

const myFunction4 = (str: string): string => {
  return "sourav";
};

let heros = ["sourav", "das", "suvro"];
heros.map((hero: string): string => {
  return `here is our hero = ${hero}`;
});

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
  //return 1 //error! you cannot return form a void function
}

function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}

export {};
