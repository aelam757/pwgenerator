var lowerCase = confirm("Do you want to use lowercase characters?");
var upperCase= confirm("Do you want to use uppercase characters?");
var numbers = confirm("Do you want to use numbers?");
var symbols = confirm("Do you want to use symbols?");

console.log(lowerCase);
console.log(upperCase);
console.log(numbers);
console.log(symbols);

function generate(){


    var complexity = document.getElementById("slider").value;


    var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


    document.getElementById("display").value = password;

}


document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password saved!");

}