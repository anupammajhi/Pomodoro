$(function(){

});

var percentage=0;
var clockState = "stopped";
var sessionMin = 25;
var sessionSec = 0;
var breakMin = 5;
var breakSec = 0;

function printTime(min,sec){
  if(min<=9){
    min = "0" + min.toString();
  }
  if(sec<=9){
    sec = "0" + sec.toString();
  }
  $(".c100 .maintime").html(min + ":" + sec);
}

$(".session-time .add").click(function(){
  sessionTime = $(".session-time .time").html();
  $(".session-time .time").html(parseInt(sessionTime) + 1)
  $(".sessionDiv .maintime").html((parseInt(sessionTime) + 1) + ":00");
});

$(".break-time .add").click(function(){
  breakTime = $(".break-time .time").html();
  $(".break-time .time").html(parseInt(breakTime) + 1)
  $(".breakDiv .maintime").html((parseInt(breakTime) + 1) + ":00");
});

$(".session-time .reduce").click(function(){
  sessionTime = $(".session-time .time").html();
  if(sessionTime>0){
    $(".session-time .time").html(parseInt(sessionTime) - 1);
    $(".sessionDiv .maintime").html((parseInt(sessionTime) - 1) + ":00");
  }
});

$(".break-time .reduce").click(function(){
  breakTime = $(".break-time .time").html();
  if(breakTime>0){
    $(".break-time .time").html(parseInt(breakTime) - 1);
    $(".breakDiv .maintime").html((parseInt(breakTime) - 1) + ":00");
  }
});

$(".c100").click(function(){
  parent = $(this).parent()[0];
  if(clockState == "stopped"){

  }
  if(clockState == "running"){
    
  }
});
