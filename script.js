var $ = function (id) {
    return document.getElementById(id);
};
// initialize variables
var temp = "";
var tempTwo = "";

function checkZip(){
    temp = $("zipCode").value;
    tempTwo = new RegExp("\\d{5}(-\d{4})?");
    if(!tempTwo.test(temp)){
        zipOut.innerHTML = "Use only numbers";
        $("zipCode").value = "";
    }else{
        zipOut.innerHTML = "Zip meets criteria";
    }
}

function checkEmail(){
    temp = $("email").value;
    tempTwo = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
    if(!tempTwo.test(temp)){
        emailOut.innerHTML = "Not a Valid E-mail address";
        $("email").value = "";
    }else{
        emailOut.innerHTML = "Email meets criteria";
    }
}

function checkPhone(){
    temp = $("phoneNumber").value;
    tempTwo = new RegExp("^([a-zA-Z,#/ \.\(\)\-\+\*]*[0-9]){7}[0-9a-zA-Z,#/ \.\(\)\-\+\*]*$");
    if(!tempTwo.test(temp)){
        phoneOut.innerHTML = "Not a Valid phone number";
        $("phoneNumber").value = "";
    }else{
        phoneOut.innerHTML = "Phone number meets criteria";
    }
}

function checkPhoneC(){
    temp = $("cellNumber").value;
    tempTwo = new RegExp("^([a-zA-Z,#/ \.\(\)\-\+\*]*[0-9]){7}[0-9a-zA-Z,#/ \.\(\)\-\+\*]*$");
    if(!tempTwo.test(temp)){
        phoneOutC.innerHTML = "Not a Valid phone number";
        $("cellNumber").value = "";
    }else{
        phoneOutC.innerHTML = "Phone number meets criteria";
    }
}

function checkName(){
    temp = $("firstName").value;
    tempTwo = new RegExp("^[a-zA-Z]+$");
    if(!tempTwo.test(temp)){
        nameOut.innerHTML="Not a valid Name, Do not use spaces";
        $("first").value = "";
    }
    else{
        nameOut.innerHTML = "First name meets criteria";
    }
}

function checkNameL(){
    temp = $("lastName").value;
    tempTwo = new RegExp("^[a-zA-Z]+$");
    if(!tempTwo.test(temp)){
        nameOutL.innerHTML = "Not a valid Name, Do not use spaces";
        $("last").value = "";
    }else{
        nameOutL.innerHTML = "Last name meets criteria";
    }
}

