/*
init;
while (condition){
    statement;
    ++/..
}
*/

var i = 1;
var b = 0
var c = 0
while(i<=10){
    if(i%2 == 0){
        console.log("the while say Even Number ",i)
        b= b + i
    }else{
        console.log("the while say Even Number ",i)
        c=c+i
    }
    i = i+1

}
console.log("even",b)
console.log("odd",c)