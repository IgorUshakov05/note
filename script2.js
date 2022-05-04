var date = document.getElementById('date')
var time = document.getElementById('time')
var sleep = document.getElementById('sleep')

function dated() {
    var dataNow = new Date();
    var day = dataNow.getDay()
    var mounth = dataNow.getMonth()
    var years = dataNow.getFullYear()
    if (day <= 9) {
        day = "0" + day
    }
    if (mounth <= 9) {
        mounth = "0" + mounth
    }
    if (years <= 9) {
        years = "0" + years
    }
    date.innerHTML = `Текущая дата - ${day}:${mounth}:${years}`
}


function times() {
    var timea = new Date();
    var hous = timea.getHours()
    var min = timea.getMinutes()
    var seconds = timea.getSeconds()
    timea.setHours(13);
    if (hous <= 9) {
        hous = "0" + hous
    }
    if (min <= 9) {
        min = "0" + min
    }
    if (seconds <= 9) {
        seconds = "0" + seconds 
    }
    time.innerHTML = `Текущее время - ${hous}:${min}:${seconds}`
    setInterval(() => {
        sleep.innerHTML = (hous >= 23 || hous <= 6)? "Спи!":"Работай!"
    }, 100)
}

setInterval(() => {
    dated();
    times()
}, 1000)