class Store{
    constructor(){
        this.productlist  = ["keyboard","Mouse","Computer","Laptop","Mobile"]
        this.userlist = ["subrat","sagar","rajesh","Papu","pratap"]
    }

}
class Shop extends Store{
    constructor(){
        super();
    }
    getproduct = () =>{
        let data = "<h2> Item list </h2>";
        this.productlist.map((pname,index)=>{
            data += "<p>" + index + " "+ pname + "<p/>"
        })
        document.getElementById("container").innerHTML = data 
    }

    // getuser = () =>{
    //     let data = "<h2> Item list </h2>";
    //     this.userlist.map((user,index)=>{
    //         data += "<p>" + index + " "+ user + "<p/>"
    //     })
    //     document.getElementById("container").innerHTML = data 
    // }

    getuser =  ()=>{
        let data = ""
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respnose => respnose.json())
        .then(userarray =>{
            userarray.map((user,index)=>{
                data += "<div>";
                data += "<p>" + user.name + "</p>"
                data += "<p>" + user.email + "</p>"
                data += "<p>" + user.address.city + "</p>"
                data += "<p>" + user.address.zipcode + "</p>"
                data += "</div>"
            })
            document.getElementById('container').innerHTML = data
        })
    }
}
const obj3 = new Shop()