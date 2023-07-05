
function outUpdateinformation() {
    document.getElementById("form-infomation-personal").style.display = "none";
}

function ShowUpdateinformation() {
    document.getElementById("form-infomation-personal").style.display = "flex";
}



function changeInformation() {
    var name = document.getElementById("change-name").value;
    var address = document.getElementById("change-address").value;
    var mail = document.getElementById("change-mail").value;
    var phone = document.getElementById("change-phone").value;
    // console.log(name);
    // console.log(address);
    // console.log(mail);
    // console.log(phone);
    document.getElementById("name-personal").innerHTML = name;
    document.getElementById("address").innerHTML = address;
    document.getElementById("mail").innerHTML = mail;
    document.getElementById("number").innerHTML = phone;
    document.getElementById("form-infomation-personal").style.display = "none";
}