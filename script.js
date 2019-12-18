// generate random password
function generate() {

    //set password length
    let complexity = document.getElementById("display")

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

    let password = "";

    //create for loop to choose password
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        else ()
    }

    //add password to textbox/display
    document.getElementById("display").values = password;

}