/*--------------Timer One----------------*/

$(document).ready(function() {
  function makeTimer() {
    var endTime = new Date("November 15, 2022 02:15:13");
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var startTime = new Date('December 25, 2022 23:15:30');
    var hour = startTime.getHours();
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $(".timer_1 .days").html( days + "<span>D</span>");
    $(".timer_1 .hours").html( hours + "<span>H</span>");
    $(".timer_1 .minutes").html(minutes + "<span>M</span>" );
    $(".timer_1 .seconds").html(seconds + "<span>S</span>");
  }
  setInterval(function() {
    makeTimer();
  }, 1000);
});




/*------Timer Two------*/
$(document).ready(function () {
    function makeTimer() {
        var endTime = new Date("November 18, 2022 06:10:28");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var startTime = new Date('December 25, 2022 23:15:30');
        var hour = startTime.getHours();
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $(".timer_2 .days").html(days + "<span>D</span>");
        $(".timer_2 .hours").html(hours + "<span>H</span>");
        $(".timer_2 .minutes").html(minutes + "<span>M</span>");
        $(".timer_2 .seconds").html(seconds + "<span>S</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 1000);
});




/*------Timer Three------*/
$(document).ready(function () {
    function makeTimer() {
        var endTime = new Date("November 21, 2022 09:18:23");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var startTime = new Date('December 25, 2022 23:15:30');
        var hour = startTime.getHours();
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $(".timer_3 .days").html(days + "<span>D</span>");
        $(".timer_3 .hours").html(hours + "<span>H</span>");
        $(".timer_3 .minutes").html(minutes + "<span>M</span>");
        $(".timer_3 .seconds").html(seconds + "<span>S</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 1000);
});