var scores = 1000;
var betList = [];
document.getElementById('scores').innerHTML = scores;

function run() {
    var i1 = document.getElementById('i1');
    var i2 = document.getElementById('i2');
    var i3 = document.getElementById('i3');

    const rand1 = setInterval(ramdomImages, 50, i1);
    const rand2 = setInterval(ramdomImages, 50, i2);
    const rand3 = setInterval(ramdomImages, 50, i3);

    setTimeout(function () { clearInterval(rand1) }, 3000);
    setTimeout(function () { clearInterval(rand2) }, 3000);
    setTimeout(function () { clearInterval(rand3) }, 3000);

    setTimeout(Result, 3001);


}

function ramdomImages(element) {
    var items = ['bau.png', 'cua.png', 'tom.png', 'ca.png', 'huou.png', 'ga.png'];
    var item = items[Math.floor(Math.random() * items.length)];
    element.setAttribute('src', 'Images/' + item);
}

function placeAbet(element) {
    var current = element.getAttribute('data-cuoc');
    var anh = element.getAttribute('src');
    var cuoc = parseInt(current);

    cuoc += 10; // Thêm 10 vào số tiền cược hiện tại
    element.setAttribute('data-cuoc', cuoc);

    document.getElementById('dat_' + element.id).innerHTML = cuoc;
    scores -= 10;
    document.getElementById('scores').innerHTML = scores;

    let item = { anh, cuoc };
    var check = betList.find(item => {
        return item.anh === anh;
    });

    if (!check) {
        betList.push(item);
    } else {
        check.cuoc = cuoc;
    }

    var element = document.querySelectorAll('[data-cuoc]');
    for (var i = 0; i < element.length; i++) {
        {
            element[i] = setAttribute('data-cuot', '0');
        }
    }
}


function Result() {
    var i1 = document.getElementById('i1');
    var i2 = document.getElementById('i2');
    var i3 = document.getElementById('i3');

    var I1 = i1.getAttribute('src');
    var I2 = i2.getAttribute('src');
    var I3 = i3.getAttribute('src');

    var len = betList.length;
    for (var i = 0; i < betList.length; i++) {
        if (I1 === betList[i].anh) {
            scores += betList[i].cuoc * 2;
        }
        if (I2 === betList[i].anh) {
            scores += betList[i].cuoc * 2;
        }
        if (I3 === betList[i].anh) {
            scores += betList[i].cuoc * 2;
        }
    }


    const betAmounts = document.querySelectorAll('.price');
    betAmounts.forEach(betAmounts => {
        betAmounts.innerHTML = 0;
    });
    document.getElementById('scores').innerHTML = scores;
}
