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

const btn = document.getElementById("btn-play-now");
let toggle = false;

setInterval(() => {
    toggle = !toggle; // bật/tắt toggle
    if (toggle) {
        btn.style.transform = 'scale(1.1)';
    } else {
        btn.style.transform = 'scale(1)';
    }
}, 1000); // chạy đoạn code sau mỗi 1 giây
