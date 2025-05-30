function myFunction(num) {
    var sq = num * num;
    return sq;
}
// let result:number=myFunction("sourav")  //wrong call parameter is number but argument passed is string
var result = myFunction(3);
console.log(result);
function myFunction2(num) {
    var sq = num * num;
    return "Hello";
}
//wrong!!!
var value = myFunction2(3);
console.log(result);
/*
and this dont give any error! why? because value does not have any type. we can solve this in two way
1.add type number to value
2.add return type to myFunction2()
*/
///solution
function myFunction3(num) {
    return num * num;
}
var value3 = myFunction3(3);
