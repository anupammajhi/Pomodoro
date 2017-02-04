$(function() {
    $("button").removeAttr("disabled");
});

var percentage = 0;
var percentageTotal;
var clockState = "stopped";
var sessionTime = 25;
var breakTime = 5;
beep = new Audio("beep.mp3")
bell = new Audio("bell.mp3")

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
    clearPercentage()
});

$(".break-time .add").click(function() {
    breakTime = parseInt($(".break-time .time").html()) + 1;
    $(".break-time .time").html(breakTime);
    $(".breakDiv .maintime").html(breakTime + ":00");
    clearPercentage()
});

$(".session-time .reduce").click(function() {
    sessionTime = parseInt($(".session-time .time").html()) - 1;
    if (sessionTime >= 1) {
        $(".session-time .time").html(sessionTime);
        $(".sessionDiv .maintime").html(sessionTime + ":00");
    } else {
        sessionTime = 1;
    }
    clearPercentage()
});


$(".break-time .reduce").click(function() {
    breakTime = parseInt($(".break-time .time").html()) - 1;
    if (breakTime >= 1) {
        $(".break-time .time").html(breakTime);
        $(".breakDiv .maintime").html(breakTime + ":00");
    } else {
        breakTime = 1;
    }
    clearPercentage()
});

$(".c100").click(function() {
    parent = $(this).parent()[0].className;

    if (clockState == "stopped") {
        clock = setInterval(function() {

            clockCur = $(".showClock .maintime").html().split(":");

            if (percentage === 100) {
                clearPercentage();
                percentage = 0;
            }

            if ($(".showClock").hasClass("sessionDiv")) {
                percentageTotal = sessionTime * 60;
            }
            if ($(".showClock").hasClass("breakDiv")) {
                percentageTotal = breakTime * 60;
            }


            if (parseInt(clockCur[1]) == 0) {
                min = parseInt(clockCur[0]) - 1;
                sec = 59;
            } else {
                min = parseInt(clockCur[0]);
                sec = parseInt(clockCur[1]) - 1;
            }

            if (min === -1 && sec == 59) {
                $(".sessionDiv").toggleClass("showClock");
                $(".breakDiv").toggleClass("showClock");
                $(".sessionDiv .maintime").html(sessionTime + ":00");
                $(".breakDiv .maintime").html(breakTime + ":00");
                clockCur = $(".showClock .maintime").html().split(":");
                min = parseInt(clockCur[0]) - 1;

            } else {
                percentage = 100 - Math.round((((min * 60) + sec) / percentageTotal) * 100)
            }

            if (min == 0 && sec > 0 && sec < 6) {
                beep.currentTime = 0;
                beep.play();
            }
            if (min == 0 && sec == 0) {
                bell.play();
            }

            if (percentage !== 0) {
                $(".showClock > .c100").removeClass("p" + (percentage - 1) + " p" + (percentage - 2))
                $(".showClock > .c100").addClass("p" + percentage);
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

function clearPercentage() {
    $(".c100").removeClass("p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 p16 p17 p18 p19 p20 p21 p22 p23 p24 p25 p26 p27 p28 p29 p30 p31 p32 p33 p34 p35 p36 p37 p38 p39 p40 p41 p42 p43 p44 p45 p46 p47 p48 p49 p50 p51 p52 p53 p54 p55 p56 p57 p58 p59 p60 p61 p62 p63 p64 p65 p66 p67 p68 p69 p70 p71 p72 p73 p74 p75 p76 p77 p78 p79 p80 p81 p82 p83 p84 p85 p86 p87 p88 p89 p90 p91 p92 p93 p94 p95 p96 p97 p98 p99 p100");
}
