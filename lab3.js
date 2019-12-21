//Завдання 1
function showCurrentDateTime() {
    let now = new Date();
    let month = "";
    let day = "";
    switch (now.getMonth()) {
        case 0:
            month = "Січня";
            break;
        case 1:
            month = "Лютого";
            break;
        case 2:
            month = "Березеня";
            break;
        case 3:
            month = "Квітня";
            break;
        case 4:
            month = "Травня";
            break;
        case 5:
            month = "Червня";
            break;
        case 6:
            month = "Липня";
            break;
        case 7:
            month = "Серпня";
            break;
        case 8:
            month = "Вересня";
            break;
        case 9:
            month = "Жовтня";
            break;
        case 10:
            month = "Листопада";
            break;
        case 11:
            month = "Грудня";
            break;
    }
    switch (now.getDay()) {
        case 0:
            day = "неділя";
            break;
        case 1:
            day = "понеділок";
            break;
        case 2:
            day = "вівторок";
            break;
        case 3:
            day = "середа";
            break;
        case 4:
            day = "четвер";
            break;
        case 5:
            day = "п'ятниця";
            break;
        case 6:
            day = "субота";
            break;
    }
    let result = "Дата: " + now.getDate() + " " + month + " " + now.getFullYear() + " року<br>" + "День: " + day + "<br>" +
        "Час: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("dateTime").innerHTML = result;
}


//Завдання 2
function getDateFromInput() {
    let date = document.getElementById("dayOfWeekInput").value;
    return date;
}

function showDayOfTheWeek(givenDate) {
    let date = new Date(givenDate);
    let day = "";
    switch (date.getDay()) {
        case 0:
            day = "неділя";
            break;
        case 1:
            day = "понеділок";
            break;
        case 2:
            day = "вівторок";
            break;
        case 3:
            day = "середа";
            break;
        case 4:
            day = "четвер";
            break;
        case 5:
            day = "п'ятниця";
            break;
        case 6:
            day = "субота";
            break;
    }
    let result = "Номер дня: " + date.getDay() + "<br>Назва дня: " + day;
    document.getElementById("dayOfWeek").innerHTML = result;
}

//Завдання 3
function getDaysFromInput() {
    let days = document.getElementById("daysAgo").value;

    return days;
}

function findDateDaysAgo(days) {
    let now = new Date();
    now.setDate(now.getDate() - days);
    now = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();
    document.getElementById("foundedDate").innerHTML = now;
}
//Завдання 4
function getDateFromInput2() {
    let date = document.getElementById("dayAndMonth").value;
    return date;
}

function findLastDayOfMonth(inputDate) {
    let date = new Date(inputDate);
    let lastDayOfMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let day = "";
    switch (lastDayOfMonthDate.getDay()) {
        case 0:
            day = "Неділя";
            break;
        case 1:
            day = "Понеділок";
            break;
        case 2:
            day = "Вівторок";
            break;
        case 3:
            day = "Середа";
            break;
        case 4:
            day = "Четвер";
            break;
        case 5:
            day = "П'ятниця";
            break;
        case 6:
            day = "Субота";
            break;
    }
    document.getElementById("lastDayOfMonth").innerHTML = day;
}
//Задвання 5
function seconds() {
    let secPassed = getSecondsFromTheStartOfTheDay();
    let secRemains = getSecondsTillTheNextDay();
    let obj = {};
    obj["Секунд пройшло"] = secPassed;
    obj["Секунд залишилося"] = secRemains;
    let result = `object { Секунд пройшло: ${obj["Секунд пройшло"]} Секунд залишилося: ${obj["Секунд залишилося"]}}`;
    document.getElementById("secondsFromThisDay").innerHTML = result;
}

function getSecondsFromTheStartOfTheDay() {
    let date = new Date();
    let seconds = ((date.getHours() * 60) * 60) + date.getMinutes() * 60 + date.getSeconds();
    let result = seconds;
    return result;
}

function getSecondsTillTheNextDay() {
    let date = new Date();
    let seconds = ((date.getHours() * 60) * 60) + date.getMinutes() * 60 + date.getSeconds();
    let result = 86400 - seconds;
    return result;
}
//Завдання 6
function getUnformatedDate() {
    let date = document.getElementById("date").value;
    return date;
}

function formateDate(inputDate) {
    let date = new Date(inputDate);
    let formatedDate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    document.getElementById("formatedDate").innerHTML = formatedDate;
}
//Завдання 7
function getTwoDates() {
    let firstDate = document.getElementById("firstDate").value;
    let secondDate = document.getElementById("secondDate").value;
    let arr = [firstDate, secondDate]
    return arr;
}

function dateSubstitution(arr) {
    let date1 = new Date(arr[0]);
    let date2 = new Date(arr[1]);
    let dateDifference = Math.abs(date1 - date2);
    let dayDifference = Math.ceil(dateDifference / (1000 * 60 * 60 * 24)) + " днів";
    document.getElementById("datesDifference").innerHTML = dayDifference;
}
//Завдання 8
function getDateUnformated() {
    let dateUnformated = document.getElementById("unformatedDate").value;
    return dateUnformated;
}

function dateFormat(inputDate) {
    let date = new Date(inputDate);
    let now = new Date();
    let seconds = (date.getFullYear() * 12 * 29 * 24 * 60 * 60) + ((date.getMonth() + 1) * 29 * 24 * 60 * 60) + (date.getDate() * 24 * 60 * 60) + ((date.getHours() * 60) * 60) + date.getMinutes() * 60 + date.getSeconds();
    let nowSeconds = (now.getFullYear() * 12 * 29 * 24 * 60 * 60) + ((now.getMonth() + 1) * 29 * 24 * 60 * 60) + (now.getDate() * 24 * 60 * 60) + ((now.getHours() * 60) * 60) + now.getMinutes() * 60 + now.getSeconds();
    let result;
    switch (true) {
        case (1 > Math.abs(nowSeconds - seconds)):
            result = "Тільки що";
            break;
        case (60 > Math.abs(nowSeconds - seconds)):
            result = `${nowSeconds - seconds} секунд назад`;
            break;
        case (3600 > Math.abs(nowSeconds - seconds)):
            result = `${Math.round((nowSeconds - seconds)/60)} хвилин назад`;
            break;
        default:
            result = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();;
    }
    document.getElementById("dateFormated").innerHTML = result;
}
//Завдання 9
function getDaysFromInput2() {
    let days = document.getElementById("dateString").value;
    return days;
}

function convertToDateToObject(string) {
    let date = new Date(string);
    let obj = {};
    obj.day = date.getDate();
    obj.month = date.getMonth() + 1;
    obj.year = date.getFullYear();
    console.log(obj);
    let result = `object { day: ${obj.day}, month: ${obj.month}, year: ${obj.year}}`;
    document.getElementById("dateObject").innerHTML = result;
}
//Завдання 10
function getDateUniversal() {
    let language = document.getElementById("dateBox").value;
    return language;
}

function printDate(language) {
    let now = new Date();
    let day = "";
    let month = "";
    let result = "";
    let AD = "";
    switch (language) {
        case "uk":
            AD = "Нашої ери";
            switch (now.getDay()) {
                case 0:
                    day = "неділя";
                    break;
                case 1:
                    day = "понеділок";
                    break;
                case 2:
                    day = "вівторок";
                    break;
                case 3:
                    day = "середа";
                    break;
                case 4:
                    day = "четвер";
                    break;
                case 5:
                    day = "п'ятниця";
                    break;
                case 6:
                    day = "субота";
                    break;
            }
            switch (now.getMonth()) {
                case 0:
                    month = "січня";
                    break;
                case 1:
                    month = "лютого";
                    break;
                case 2:
                    month = "березеня";
                    break;
                case 3:
                    month = "квітня";
                    break;
                case 4:
                    month = "травня";
                    break;
                case 5:
                    month = "червня";
                    break;
                case 6:
                    month = "липня";
                    break;
                case 7:
                    month = "серпня";
                    break;
                case 8:
                    month = "вересня";
                    break;
                case 9:
                    month = "жовтня";
                    break;
                case 10:
                    month = "листопада";
                    break;
                case 11:
                    month = "Грудня";
                    break;
            }
            break;
        case "ru":
            AD = "Наша эра";
            switch (now.getDay()) {
                case 0:
                    day = "Воскресенье";
                    break;
                case 1:
                    day = "Понедельник";
                    break;
                case 2:
                    day = "Вторник";
                    break;
                case 3:
                    day = "Среда";
                    break;
                case 4:
                    day = "Четверг";
                    break;
                case 5:
                    day = "Пятница";
                    break;
                case 6:
                    day = "Суббота";
                    break;
            }
            switch (now.getMonth()) {
                case 0:
                    month = "январь";
                    break;
                case 1:
                    month = "февраль";
                    break;
                case 2:
                    month = "март";
                    break;
                case 3:
                    month = "апрель";
                    break;
                case 4:
                    month = "май";
                    break;
                case 5:
                    month = "июнь";
                    break;
                case 6:
                    month = "июль";
                    break;
                case 7:
                    month = "август";
                    break;
                case 8:
                    month = "сентябрь";
                    break;
                case 9:
                    month = "октябрь";
                    break;
                case 10:
                    month = "ноябрь";
                    break;
                case 11:
                    month = "декабрь";
                    break;
            }
            break;
        case "en":
            AD = "Anno Domini";
            switch (now.getDay()) {
                case 0:
                    day = "Sunday";
                    break;
                case 1:
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesay";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
                    break;
            }
            switch (now.getMonth()) {
                case 0:
                    month = "january";
                    break;
                case 1:
                    month = "february";
                    break;
                case 2:
                    month = "marhc";
                    break;
                case 3:
                    month = "april";
                    break;
                case 4:
                    month = "may";
                    break;
                case 5:
                    month = "june";
                    break;
                case 6:
                    month = "july";
                    break;
                case 7:
                    month = "august";
                    break;
                case 8:
                    month = "september";
                    break;
                case 9:
                    month = "october";
                    break;
                case 10:
                    month = "november";
                    break;
                case 11:
                    month = "december";
                    break;
            }
            break;
    }
    result = day + ", " + now.getDate() + " " + month + " " + now.getFullYear() + " " + AD + ", " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("printDate").innerHTML = result;
}