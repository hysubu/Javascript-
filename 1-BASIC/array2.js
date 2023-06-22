var city = ["Banglore","Mumbai","Patna","Pune","Kolkata"];
for (var i = 0; i < city.length ;i++){
    console.log(city[i],i)
}

console.log("_____________________________")
for (var i = city.length-1 ;i>=0 ;i-- ){
    console.log(city[i])

}




console.log("_____________________________")
for (var i = city.length-1 ;; ){
    if(i>=0)
        console.log(city[i])
        i = i-1
    

}



