function stopwatch() {
    let buttonStart = document.getElementById("startBtn");
    let buttonStop = document.getElementById("stopBtn");
    let divEl = document.getElementById("time");
    buttonStart.addEventListener("click", start)
    buttonStop.addEventListener("click", stop)
    var seconds=0;
    var mins = 0;
    var counter;
    function start () {
        seconds=0;
        mins=0;
        divEl.textContent="00:00";
        buttonStart.setAttribute("disabled", "true");
        buttonStop.removeAttribute("disabled");
        counter = setInterval(timer, 0.0001000);
    }
    function stop () {
        buttonStop.setAttribute("disabled", "true");
        buttonStart.removeAttribute("disabled");
        clearInterval(counter);

    }
    function timer () {
        seconds+=1;
        if (seconds>60) {
            seconds-=60;
            mins++;
        }
        if (mins<10) {
            if (seconds<10) divEl.textContent="0"+mins+":0"+seconds;
            else {
                divEl.textContent="0"+mins+":"+seconds;
            }

        }
        else {
            if (seconds<10) divEl.textContent=mins+":0"+seconds;
            else {
                divEl.textContent=mins+":"+seconds;
            }
    }
}
}
