$(function() {
    $("button").removeAttr("disabled");
});

var percentage = 0;
var clockState = "stopped";
var sessionTime = 25;
var breakTime = 5;

function printTime(min, sec) {
    if (min <= 9) {
        min = "0" + min.toString();
    }
    if (sec <= 9) {
        sec = "0" + sec.toString();
    }
    $(".showClock .maintime").html(min + ":" + sec);
}

$(".session-time .add").click(function() {
    sessionTime = parseInt($(".session-time .time").html()) + 1;
    $(".session-time .time").html(sessionTime)
    $(".sessionDiv .maintime").html(sessionTime + ":00");
});

$(".break-time .add").click(function() {
    breakTime = parseInt($(".break-time .time").html()) + 1;
    $(".break-time .time").html(breakTime);
    $(".breakDiv .maintime").html(breakTime + ":00");
});

$(".session-time .reduce").click(function() {
    sessionTime = parseInt($(".session-time .time").html()) - 1;
    if (sessionTime >= 1) {
        $(".session-time .time").html(sessionTime);
        $(".sessionDiv .maintime").html(sessionTime + ":00");
    } else {
        sessionTime = 1;
    }

});


$(".break-time .reduce").click(function() {
    breakTime = parseInt($(".break-time .time").html()) - 1;
    if (breakTime >= 1) {
        $(".break-time .time").html(breakTime);
        $(".breakDiv .maintime").html(breakTime + ":00");
    } else {
        breakTime = 1;
    }

});

$(".c100").click(function() {
    parent = $(this).parent()[0].className;

    if (clockState == "stopped") {
        clock = setInterval(function() {

            clockCur = $(".showClock .maintime").html().split(":");

            if (parseInt(clockCur[1]) == 0) {
                min = parseInt(clockCur[0]) - 1;
                sec = 59;
            } else {
                min = parseInt(clockCur[0]);
                sec = parseInt(clockCur[1]) - 1;
            }

            if (min === -1) {
                $(".sessionDiv").toggleClass("showClock");
                $(".breakDiv").toggleClass("showClock");
                $(".sessionDiv .maintime").html(sessionTime + ":00");
                $(".breakDiv .maintime").html(breakTime + ":00");
                clockCur = $(".showClock .maintime").html().split(":");
                min = parseInt(clockCur[0]) - 1;
            }

            printTime(min, sec);
            clockState = "running"

        }, 1000);
        $(".clock-control span").removeClass("glyphicon-play")
        $(".clock-control span").addClass("glyphicon-pause")
        $("button").attr("disabled", "");
    }
    if (clockState == "running") {

        clearInterval(clock);
        clockState = "stopped"
        $(".clock-control span").removeClass("glyphicon-pause")
        $(".clock-control span").addClass("glyphicon-play")
        $("button").removeAttr("disabled");
    }
});
