function generate() {


var lowerCase= confirm("Do you want to use lowercase characters?");
var upperCase= confirm("Do you want to use uppercase characters?");
var numbers= confirm("Do you want to use numbers?");
var symbols= confirm("Do you want to use symbols?");

var values="";
console.log(values=true);
console.log(lowerCase=false);
console.log(upperCase=false);
console.log(numbers=false);
console.log(symbols=false);
    


    var complexity = document.getElementById("slider").value;


    var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = "";

    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


    document.getElementById("display").value = password;

}


document.getElementById("slider").oninput = function () {

    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }

}

function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password saved!");

}