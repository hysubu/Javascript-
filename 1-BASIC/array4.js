var city = ["Banglore","Mumbai","Patna","Pune","Kolkata"];
console.log("1. Using map function() ")
city.map((name,index)=>{
    console.log(index,'#',name)
})


console.log("2. Using map function() ")


city.map(function(name,index){
    console.log(index,"@",name)
})


console.log("c. Without index map() ")
city.map(name => {
    console.log(name)
})
