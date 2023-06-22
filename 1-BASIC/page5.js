console.log("The Nested Condition");//27/12/2022

var input = "100";
// isNaN()- is not a number    its convert the "str number " to number 
// string - true 
// number - false

if (isNaN(input)){

    console.log(input,"is string type")
    
}else{
    console.log(input,'a number type')
    if (input % 2 == 0){

        console.log(input,"is even number")

    }else{

        console.log(input,'is odd number ')
    }
}