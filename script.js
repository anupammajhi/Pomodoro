$(function(){

});


$(".session-time .add").click(function(){
  sessionTime = $(".session-time .time").html();
  $(".session-time .time").html(parseInt(sessionTime) + 1)
  $(".c100 span").html((parseInt(sessionTime) + 1) + ":00");
});

$(".break-time .add").click(function(){
  breakTime = $(".break-time .time").html();
  $(".break-time .time").html(parseInt(breakTime) + 1)
});

$(".session-time .reduce").click(function(){
  sessionTime = $(".session-time .time").html();
  if(sessionTime>0){
    $(".session-time .time").html(parseInt(sessionTime) - 1);
  }
});

$(".break-time .reduce").click(function(){
  breakTime = $(".break-time .time").html();
  if(breakTime>0){
    $(".break-time .time").html(parseInt(breakTime) - 1);
  }
});
