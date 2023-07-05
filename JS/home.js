var icon_flag = true;  // false sẽ là close-outline

function change_icon() {
    if (icon_flag) {
        document.getElementById("icon-menu").name = "close-outline";
        icon_flag = false;
    } else {
        document.getElementById("icon-menu").name = "menu-outline";
        icon_flag = true;
    }
}


const check = false;

function scrollToTop() {
    if (check == true)
        return;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 2) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
        console.log(c);
    }
}

function showlogin() {
    document.getElementById("form-login").style.display = "flex";
}

function outlogin() {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("form-sign-up").style.display = "none";
}

function showsignup() {
    document.getElementById("form-sign-up").style.display = "flex";
    document.getElementById("form-login").style.display = "none";
}

function outsignup() {
    document.getElementById("form-sign-up").style.display = "none";
    document.getElementById("form-login").style.display = "flex";
}


var checkContact = true;
function showFormContact() {
    if (checkContact == true) {
        document.getElementById("form-contact").style.display = "block";
        checkContact = false;
    } else {
        document.getElementById("form-contact").style.display = "none";
        checkContact = true;
    }
}

function previous() {
    const element = document.getElementById("slide-show"); // Replace "my-element" with the ID of your element
    const margin = element.style.marginLeft;
    console.log(margin);
}
