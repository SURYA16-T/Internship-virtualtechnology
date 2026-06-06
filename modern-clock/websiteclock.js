const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')
const clock = () => {
    let date = new Date()
    let hh = date.getHours() / 12 * 360
    let mm = date.getMinutes() / 60 * 360
    let ss = date.getSeconds() / 60 * 360
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000)
const dateDayWeek = document.getElementById('date-day-week'),
    dateMonth = document.getElementById('date-month'),
    dateDay = document.getElementById('date-day'),
    dateYear = document.getElementById('date-year'),
    textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textSeconds = document.getElementById('text-seconds'),
    textAmPm = document.getElementById('text-ampm')
const clockText = () => {
    let date = new Date()
    let dayWeek = date.getDay(),
        month = date.getMonth(),
        day = date.getDate(),
        year = date.getFullYear(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds(),
        ampm
    let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`
    dateMonth.innerHTML = `${months[month]}`
    dateDay.innerHTML = `${day}, `
    dateYear.innerHTML = year
    dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`
    dateMonth.innerHTML = `${months[month]}`
    dateDay.innerHTML = `${day}, `
    dateYear.innerHTML = year
    if (hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    textAmPm.innerHTML = ampm
    if (hh == 0) { hh = 12 }
    if (hh < 10) { hh = `0${hh}` }
    textHour.innerHTML = `${hh}:`
    if (mm < 10) { mm = `0${mm}` }
    textMinutes.innerHTML = mm
    textSeconds.innerHTML = `:${ss}`
}

setInterval(clockText, 1000)