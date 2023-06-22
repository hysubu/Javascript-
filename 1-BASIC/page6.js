

var url = "/login"
var url = "/signup"

switch(url){
    case '':
    console.log('import and display home.html')
    break;
    case '/login':
        console.log('import and display login.html')
        break;
    case '/signup':
    case "/register":
    console.log("import and display register.html");
    break;
default:
    console.log("import and display home.html");
}




