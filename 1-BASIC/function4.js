function one(a,b){
    var c = a+b
    console.log(a,b,"Addition is :",c)
}
one(20,30)
one()
console.log("--------------------------")

function two(a=0,b=0,c=0){
    var d = a+b+c
    console.log(a,b,c,"THE ADDITION IS :",d)

}
two();
two(1,2,3);
two(1,2);
two(1);