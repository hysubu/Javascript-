class Myclass{

    home = () =>{
        console.log("welcome Home")
    }

    about = ()=>{
        var data = "helooo"
        document.getElementById("container").innerText =data 
        alert("hello")
        console.log("Aboute Us")
    }

    contact = () =>{
        console.log("Contact")
    }

    
} // Class End 
// The `new` keyword is used to create an instance of a constructor function. When used, the `new` keyword creates a new object and sets the `this` keyword to that object.
const obj1 = new  Myclass; // How to create object of class 
obj1.home();
obj1.about();
obj1.contact();
var obj2 = new Myclass
obj2.about()