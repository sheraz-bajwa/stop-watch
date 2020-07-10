var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;

    if(msec >= 100){
        sec++ 
        secHeading.innerHTML = sec
        msec = 0
    }else if(sec >= 10){
        min++
        sec = 0
        minHeading.innerHTML = min
    }
}


function start(){

interval = setInterval(timer,10)


}


function stop(){
    clearInterval(interval)
}

function resume(){

    interval = setInterval(timer,10)
    }

function reset(){
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
}
// var count = 0;
// var interval;
// function timer(){
//     count++
//     document.write(count)
// }

// interval = setInterval(timer,1000)

// setTimeout(function(){

//     clearInterval(interval)

// },5000)


// function timer(){
// document.write("running.....<br>")
// }

// setInterval(timer,1000)

// function timeout(){
//     document.write("running....")
// }

// setTimeout(timeout,3000)