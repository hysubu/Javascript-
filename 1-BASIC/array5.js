var city = ["Banglore","Mumbai","Patna","Pune","Kolkata"];
console.log("1. Using map function() ")
city.forEach((name,index)=>{
    console.log(index,'#',name)
})


console.log("2. Using map function() ")


city.forEach(function(name,index){
    console.log(index,"@",name)
})


console.log("c. Without index map() ")
city.forEach(name => {
    console.log(name)
})
