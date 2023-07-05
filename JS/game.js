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


// const check = false;

function scrollToTop() {
    // if (check == true)
    //     return;
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

var checktoplplayer = false;

function showtopplayer() {
    if (checktoplplayer == false) {
        document.getElementById("top-player").style.height = "100%";
        document.getElementById("see-more").innerHTML = "collapse";
        checktoplplayer = true;
    } else {
        document.getElementById("top-player").style.height = "30%";
        document.getElementById("see-more").innerHTML = "see more";
        checktoplplayer = false;
    }
}

var links = document.querySelectorAll('#duong-dan');
for (var i = 0; i < links.length; i++) {
    links[i].href = 'Product.html';
}

function scrollToCreativeGame() {
    // Get the position of the target div
    var divPosition = document.getElementById("creative-game").offsetTop;

    // Scroll to the position of the target div
    window.scrollTo({
        top: divPosition,
        behavior: "smooth"
    });
}
function scrollToActionGame() {
    // Get the position of the target div
    var divPosition = document.getElementById("action-game").offsetTop;

    // Scroll to the position of the target div
    window.scrollTo({
        top: divPosition,
        behavior: "smooth"
    });
}
function scrollToStrategyGame() {
    // Get the position of the target div
    var divPosition = document.getElementById("strategy-game").offsetTop;

    // Scroll to the position of the target div
    window.scrollTo({
        top: divPosition,
        behavior: "smooth"
    });
}
function scrollToIntellectualGame() {
    // Get the position of the target div
    var divPosition = document.getElementById("intellectual-game").offsetTop;

    // Scroll to the position of the target div
    window.scrollTo({
        top: divPosition,
        behavior: "smooth"
    });
}