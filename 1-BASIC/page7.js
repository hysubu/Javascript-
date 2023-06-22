// For loop
console.log("The For Loop.................\n")
/* 
for (init; condition; inc(++)/dec(--))
            statement......
*/
for(var i= 2000; i <= 2022; i++){
    console.log("The year is :",i)

}
console.log("Descending---------------");

for(i=2022;i>2000; i--){
    console.log("The year is ",i)
}


//<<<<<<<<<<<<<<<<<<<<<<<<<< Nested Loop  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("\n Nested loop\n")
for (var i=1;i<10;i++){
    console.log(i,"Outer Loop")

    for(var j=1; j<=i; j++){
        console.log("\t",j,"the inner loop")

        for(var k=1;k<j; k++){
            console.log(k,"nestedd")
        }

    } console.log("..............................................")
}
