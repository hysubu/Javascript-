class Myclass{

    constructor(){
        this.userlist = ["subrat","sagar","rajesh","Papu","pratap"]
        this.productlist  = ["keyboard","Mouse","Computer","Laptop","Mobile"]
        this.citylist  = ["Banglore","Mumbai","Delhi","Hydrabad","Bhubaneswar"]
        this.homelist  = ["home1","home2","home3","home5","home6"]
    }

    printdata = (data)=>{
        document.getElementById("container").innerHTML = data
    }

    home = () =>{
        var data = "hello iam home function"

        this.homelist.forEach((home,index)=>{
            data += "<p>" + home + "</p>"
        })
        this.printdata(data)
        document.getElementById("container").innerHTML = data
    }
    user = () =>{
        var data = "hello iam user function"
        this.userlist.forEach((name,index)=>{
            data += "<p>" + name + "</p>"
        })
        // this.printdata(data)
        //or
        a = document.getElementById("container").innerHTML = data
    }            
    
    product = () =>{
        var data = "hello iam Product function"
        this.productlist.forEach((product,index)=>{
            data += "<p>" + product + "</p>" 
        })
        // this.printdata(data)                 // this = Current object of class 
        document.getElementById("container").innerHTML = data
        
    } 
    city = () =>{
        var data = "hello iam city function"
        this.citylist.map((city,index)=>{
            data += "<p>" + city + "</p>"
        })
        // this.printdata(data)
        document.getElementById("container").innerHTML = data
         
    }
} 
var obj1 = new Myclass;

// class: its a collection of variable and method/function 
// member method = all the user difine a function of a class 
//member variabl  = when we define a variable inside the constructer using "this" operater 
                        //The member variable can access anywheere a currentclass using "this" operater
// Constructor :- its a life cycle function of javascript oop 
                // its call automatically while creating  object of a  class 

// object of a class :- its a instance of class and its reffer the class address to a variable
//this :- its the called object of current class , but it work inside the class 
//extend(inheritance) :- its use to inherit tha data/fetaure from  one class to other class 

// var, let ,const 
//its a keyword in javascript and its use to create a variable 
// we can create using 3 ways 
/*
using :-
    var = it was used till 2015 
    let - it came in 2015 with ECMA6
    const -  it came in 2015 with ECMA6
    <<<<<<<<<<<<<value change >>>>>>>>>>>>>>>>
    1 if 
*/ 
