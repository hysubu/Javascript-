
function printData(data) {
    document.getElementById("apidata").innerHTML = data;
}

function getfile(filename) {
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open("GET", filename);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            printData(this.responseText);
        }
    };
}

function json1(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","user.json"); // This line of code creates an XMLHttpRequest object and opens a connection to the file user.json, using the HTTP GET method. This allows the code to request data from the file and receive a response.
    xmlhttp.send();   //The xmlhttp.send() method is used to send a request to a server. It can be used to request data from a server or to submit data to a server for processing.
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var user = JSON.parse(this.responseText);    // json to array
            var data = "";
            user.map((name, index)=>{
                data += "<p class='myuser'>"+ name + "</p>";
            })
            printData(data);     
        }
    };
}

function json2(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',"city.json");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let city = JSON.parse(this.responseText); 
            let data = "";
         
        city.map((cty,index)=> {
            data += "<div>" 
            data += "<p class='myuser'>"+ cty.id + "</p>";
            data += "<p class='myuser'>"+ cty.name + "</p>";
            data += "<p class='myuser'>"+ cty.state + "</p>";
            data += "<p class='myuser'>"+ cty.capital + "</p>";
            data += "</div>"
        })
        printData(data)   
    }
}
}
