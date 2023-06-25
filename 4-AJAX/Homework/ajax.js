// User List >>>>>>>>>>>>>>>>>>>>>>>>>>>>
function userdata(user_data){
    document.getElementById("userlist").innerHTML = user_data;
}

// // Book-list >>>>>>>>>>>>>>>>>>>>>>>>>>>
function bookdata(data1){
    document.getElementById("booklist").innerHTML = data1;
}

// Employee-List >>>>>>>>>>>>>>>>>>>>>
function empdata(emp_data){
    document.getElementById("employelist").innerHTML = emp_data;
}

// // //Company-list >>>>>>>>>>>>>>>>>>>>>>
function compdata(comp_data){
    document.getElementById("companylist").innerHTML = comp_data;
}

// Function ......................

function user(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',"userr.json");
    xmlhttp.send()
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            let user = JSON.parse(this.responseText);
            let user_data = ""
          user.map((user,index)=> {
              user_data += "<p class= 'myuser2'>" + user + "</p"+"<br>"
            })
            userdata(user_data)
        }
    }
}


function book(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',"book.json");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let city = JSON.parse(this.responseText); 
            let data = "";
         
        city.map((cty,index)=> {
            // data += "<div>" 
            data += "<p class='myuser'>"+ cty + "</p>";
            // data += "<p class='myuser'>"+ cty.name + "</p>";
            // data += "<p class='myuser'>"+ cty.state + "</p>";
            // data += "<p class='myuser'>"+ cty.capital + "</p>";
            // data += "</div>"
        })
        bookdata(data)   
    }
}
}
function employee(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',"employe.json");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let employe = JSON.parse(this.responseText); 
            let emp_data = "";
         
        employe.map((emp,index)=> {
            // data += "<div>" 
            emp_data += "<p class='myuser'>"+ emp + "</p>";
            // data += "<p class='myuser'>"+ cty.name + "</p>";
            // data += "<p class='myuser'>"+ cty.state + "</p>";
            // data += "<p class='myuser'>"+ cty.capital + "</p>";
            // data += "</div>"
        })
        empdata(emp_data)   
    }
}
}
function company(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',"company.json");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let company = JSON.parse(this.responseText); 
            let comp_data = "";
         
        company.map((company,index)=> {
            // data += "<div>" 
            comp_data += "<p class='myuser text-warning' >"+ company + "</p>";
            // data += "<p class='myuser'>"+ cty.name + "</p>";
            // data += "<p class='myuser'>"+ cty.state + "</p>";
            // data += "<p class='myuser'>"+ cty.capital + "</p>";
            // data += "</div>"
        })
        compdata(comp_data)   
    }
}
}