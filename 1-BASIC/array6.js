var  user = {
    name :"Ganesh",
    mobile:"1234567",
    city : "Banglore",
    age : "21 years Old"
};

console.log(user.name)
console.log(user.mobile)
console.log(user.city)
console.log(user.age)


var userlist = [
    {name:"Subrat",age:21,city:"Bhubaneswar",mobile:123345},
    {name:"Sagar",age:20,city:"Jajpur",mobile:1233232345},
    {name:"Sankar",age:22,city:"puri",mobile:123232345},
    {name:"rajesh",age:23,city:"kaktpur",mobile:12223345}
];

console.log(userlist.length)
console.log(userlist[0])
console.log(userlist[3])
userlist.map((myuser,index)=>{
    console.log(myuser.name,myuser.age,myuser.city,myuser.mobile)
    // console.log(myuser.age)
    // console.log(myuser.city)
    // console.log(myuser.mobile)
    console.log("------------------------")
})
/*

myuser = {name:"Subrat",age:21,city:"Bhubaneswar",mobile:123345} 
myuser= {name:"Sagar",age:20,city:"Jajpur",mobile:1233232345},
myuser= {name:"Sankar",age:22,city:"puri",mobile:123232345},
myuser= {name:"rajesh",age:23,city:"kaktpur",mobile:12223345}
*/