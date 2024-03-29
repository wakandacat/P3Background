//calculate the date and time
getDateTime();

//recalculate the date and time every second
setInterval(getDateTime,1000);

//---------------Screen Sizing----------------------------------------------
var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;

var x = document.body;
x.setAttribute("width",screenWidth);
x.setAttribute("height",screenHeight);


//function to get the short form text of the current weekday
function getDayOfWeek(dayOfWeekInt){

      //get the string of the current day of the week
      switch(dayOfWeekInt){
        case 0:
            dayOfWeekStr = "Su";
        break;
        case 1:
            dayOfWeekStr = "M";
        break;
        case 2:
            dayOfWeekStr = "Tu";
        break;
        case 3:
            dayOfWeekStr = "W";
        break;
        case 4:
            dayOfWeekStr = "Th";
        break;
        case 5:
            dayOfWeekStr = "F";
        break;
        case 6:
            dayOfWeekStr = "Sa";
        break;
        default:
            dayOfWeekStr = "Su";
    }

    return dayOfWeekStr;
}

//function to get the time of day text depending on the hour
function getCurrentHourOfDay(hour, dayOfWeekInt){

    if(hour >= 0 && hour < 1){
        timeOfDayStr = "Dark Hour";
        //change all the UI to be green instead of blue
        //ui element shapes
        const greenBack = document.getElementById("mainBackImage");
        greenBack.setAttribute("src","Resources/greenBack.png");
        //current date 
        const date = document.getElementById("currDate");
        date.style.color = "#0b2607";
        document.getElementById("weekday").style.color = "#0b2607";
        //current time of day 
        const time = document.getElementById("currTime");
        time.style.color = "#bff9c3";
        time.style.textShadow = "7px 5px #0b2607";
        //next 
        const next = document.getElementById("next");
        next.style.color = "#ffffff";
        next.style.textShadow = "3px 3px #0b2607";
        //days until full 
        const days = document.getElementById("daysUntilFull");
        days.style.color = "#78fe8d";
        days.style.textShadow = "3px 3px #0b2607";
        //background image
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/tartarus.png");
    } else if(hour >= 1 && hour < 6){
        timeOfDayStr = "Early Morning";
        //change all the UI to be blue again
        //maing ui element shapes
        const blueBack = document.getElementById("mainBackImage");
        blueBack.setAttribute("src","Resources/blueBack.png");
        //current date 
        const date = document.getElementById("currDate");
        date.style.color = "#246185";
        //current time of day 
        const time = document.getElementById("currTime");
        time.style.color ="#ffffff";
        time.style.textShadow = "7px 5px #246185";
        //next 
        const next = document.getElementById("next");
        next.style.color = "#d9fdff";
        next.style.textShadow = "3px 3px #246185";
        //days until full 
        const days = document.getElementById("daysUntilFull");
        days.style.color = "#9efdff";
        days.style.textShadow = "3px 3px #246185";
        //background image
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/earlyMorning.png");
    } else if(hour >= 6 && hour < 11 && dayOfWeekInt != 0){ //morning on all days except sunday
        timeOfDayStr = "Morning";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/morning.png");             
    } else if(hour >= 6 && hour < 11 && dayOfWeekInt == 0){ //morning on sundays
        timeOfDayStr = "Morning";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/weekends.png");
    } else if(hour >= 11 && hour < 12 && dayOfWeekInt != 6 && dayOfWeekInt != 0){ //all days except saturday and sunday
        timeOfDayStr = "Lunch";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/lunchTime.png");
    } else if(hour >= 12 && hour < 15 && dayOfWeekInt != 6 && dayOfWeekInt != 0){ //all days except saturday and sunday
        timeOfDayStr = "Daytime";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/daytime.png");
    } else if(hour >= 15 && hour < 16 && dayOfWeekInt != 6 && dayOfWeekInt != 0){ //all days except saturday and sunday
        timeOfDayStr = "After School";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/afterSchool.png");
    } else if(hour >= 16 && hour < 18 && dayOfWeekInt != 6 && dayOfWeekInt != 0){ //all days except saturday and sunday
        timeOfDayStr = "Afternoon";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/afternoon.png");
    } else if(hour >= 11 && hour < 18 && dayOfWeekInt == 6 || hour >= 11 && hour < 18 && dayOfWeekInt == 0){ //only saturday and sunday
        //console.log("hi");
        //console.log(hour);
        timeOfDayStr = "Daytime";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/weekendDay.png");
    } else if(hour >= 18 && hour < 21){
        timeOfDayStr = "Evening";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/evening.png");
    }else if(hour >= 21 && hour < 24){
        timeOfDayStr = "Late Night";
        const back = document.getElementById("background");
        back.setAttribute("src","Resources/lateNight.png");
    } else {
        timeOfDayStr = "Early Morning";
    }
    
    return timeOfDayStr;
}

//main function
function getDateTime(){

    //---------------GETTING THE CURRENT DATE (EX. 7 / 15 . Sa)----------------------
    var time = new Date();
    var day = time.getDate(); //0 to 31
    var month = time.getMonth() + 1; //0 to 11 (add +1 to get correct month)
    var dayOfWeekInt = time.getDay(); //0, 1, 2, 3, 4, 5, 6 (STARTING AT SUNDAY = 0)
    var dayOfWeekStr = getDayOfWeek(dayOfWeekInt); //M, T, W, Th, F, Sa, Su
  
    //place the date in the html containers
    const dateText = document.getElementById("currDate").children;
    dateText[0].innerHTML = month + " / " + day + " • "; 
    dateText[1].innerHTML = dayOfWeekStr;
    
    //there are specific text colors for weekend days
    if(dayOfWeekStr == "Sa"){
        document.getElementById("weekday").style.color = "#18179d";
    } else if(dayOfWeekStr == "Su"){
        document.getElementById("weekday").style.color = "#d5370a";
    }

    //make the text bold
    document.getElementById("currDate").style.fontWeight = 900;

    //---------------GETTING THE TIME OF DAY TEXT (EX. Daytime)--------------------------------------------
    var hour = time.getHours();
    var timeOfDayStr = getCurrentHourOfDay(hour, dayOfWeekInt);
  
    //place the time of day in the html container
    const timeOfDayText = document.getElementById("currTime").children;
    timeOfDayText[0].innerHTML = timeOfDayStr; 

    //make the text bold
    document.getElementById("currTime").style.fontWeight = 900;

    //--------------GETTING THE LUNAR PHASES-------------------------------------------------
    //using this library's functions: https://github.com/jasonsturges/lunarphase-js to get the lunarphases
    //https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e#:~:text=Using%20Julian%20date%2C%20you%20can%20calculate%20the%20current%20phase%20of,time%20between%20two%20identical%20syzygies.

    //get the img to replace with the moon phase
    var moonImg = document.getElementById("moonPhase");

    //start of copied code------------
    const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()         
    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
    }

    const LUNAR_MONTH = 29.530588853;
    const getLunarAge = (date = new Date()) => {
    const percent = getLunarAgePercent(date);
    const age = percent * LUNAR_MONTH;
    return age;
    }

    const getLunarAgePercent = (date = new Date()) => {
    return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
    }

    const normalize = value => {
    value = value - Math.floor(value);
    if (value < 0)
        value = value + 1
    return value;
    }
  

    //get the amount of days until next full moon
    const getLunarPhase = (date = new Date()) => {
    
        const age = getLunarAge(date);

        if (age < 0.5){ //0
            moonImg.setAttribute("src","Resources/newMoon.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "New";
        }
        else if (age < 3.2){
            moonImg.setAttribute("src","Resources/extraMoon2.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Sliver Left";
        }
        else if (age < 4.2){ //3.7
            moonImg.setAttribute("src","Resources/waxingMoonCrescent.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Waxing Crescent";
        }
        else if (age < 6.9){
            moonImg.setAttribute("src","Resources/almostHalfAgain1.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Almost Half";
        }
        else if (age < 7.9){ //7.4
            moonImg.setAttribute("src","Resources/halfMoonRight.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "First Quarter";
        }
        else if (age < 10.6){
            moonImg.setAttribute("src","Resources/almostMoonHalfRight.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Past Half";
        }
        else if (age < 11.6){ //11.1
            moonImg.setAttribute("src","Resources/waxingMoonGibbous.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Waxing Gibbous";
        }
        else if (age < 14){
            moonImg.setAttribute("src","Resources/sliverMoonRight.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Almost Full";
        }
        else if (age < 15){ //14.75 is full moon
            moonImg.setAttribute("src","Resources/fullMoon.png");
            daysUntilFull = (LUNAR_MONTH/2) - getLunarAge();
            daysUntilFull = Math.round(daysUntilFull);
            return "Full";
        }
        else if (age < 18){
            moonImg.setAttribute("src","Resources/sliverMoonLeft.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Past Full";
        }
        else if (age < 19){ //18.5
            moonImg.setAttribute("src","Resources/waningMoonGibbous.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Waning Gibbous";
        }
        else if (age < 21.6){
            moonImg.setAttribute("src","Resources/almostMoonHalfLeft.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Almost Half";
        }
        else if (age < 22.6){ //22.1
            moonImg.setAttribute("src","Resources/halfMoonLeft.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Last Quarter";
        }
        else if (age < 25.3){
            moonImg.setAttribute("src","Resources/almostHalfAgain2.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Sliver Right";
        }
        else if (age < 26.3){ //25.8
            moonImg.setAttribute("src","Resources/waningMoonCrescent.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Waning Crescent";
        }
        else if (age < 29){
            moonImg.setAttribute("src","Resources/extraMoon1.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "Almost New";
        } else {
            moonImg.setAttribute("src","Resources/newMoon.png");
            daysUntilFull = (LUNAR_MONTH - getLunarAge()) + (LUNAR_MONTH/2);
            daysUntilFull = Math.round(daysUntilFull);
            return "New";
        }

    }

    //place the amount of days in the html container
    const amountDays = document.getElementById("daysUntilFull").children;

    const getNext = document.getElementById("next");

    //if its a notable moon phase, then spell it out and hide "next"
    if(getLunarPhase() == "Full"){
        amountDays[0].innerHTML = "Full"; 
        document.getElementById("daysUntilFull").style.color = "white";
        getNext.style.display = "none";
    } else if (getLunarPhase() == "New"){
        amountDays[0].innerHTML = "New"; 
        document.getElementById("daysUntilFull").style.color = "white";
        getNext.style.display = "none";
    }else if (getLunarPhase() == "First Quarter" || getLunarPhase() == "Last Quarter"){
        amountDays[0].innerHTML = "Half"; 
        document.getElementById("daysUntilFull").style.color = "white";
        getNext.style.display = "none";
    } else {
        amountDays[0].innerHTML = daysUntilFull + " /"; 
    }

    //make it bold
    document.getElementById("daysUntilFull").style.fontWeight = 900;
}    

