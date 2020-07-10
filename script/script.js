var minutes = 0;
var second = 0;
var millisecond = 0;

var getMinutes = document.getElementById('minutes');
var getSecond = document.getElementById('second');
var getMilliSecond = document.getElementById('millisecond');

var intervalTime;

function timer() {
    millisecond++;
    getMilliSecond.innerHTML = millisecond;

    if (millisecond >= 99) {
        second++;
        getSecond.innerHTML = second;
        millisecond = 0;
    } else if (second >= 59) {
        second = 0;
        minutes++;
        getMinutes.innerHTML = minutes;
    }
}

function startMethod() {
    intervalTime = setInterval(timer, 10);
    document.getElementById('startMethod').disabled = true;
    document.getElementById('pauseMethod').disabled = false;
}

function pauseMethod() {
    clearInterval(intervalTime);
    document.getElementById('startMethod').disabled = false;
    document.getElementById('pauseMethod').disabled = true;
}

function resetMethod() {
    clearInterval(intervalTime)
    minutes = 0;
    second = 0;
    millisecond=0;
    getMinutes.innerHTML = minutes;
    getSecond.innerHTML = second;
    getMilliSecond.innerHTML = millisecond;

    document.getElementById('startMethod').disabled = false;
    document.getElementById('pauseMethod').disabled = false;
}