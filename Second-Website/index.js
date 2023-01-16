$(".shoe1").click(function(){
    $(".shoe1").animate({opacity:"50%"}).animate({opacity:"100%"});
});
$(".shoe2").click(function(){
    $(".shoe2").fadeOut().fadeIn();;
});
$(".shoe3").click(function(){
    $(".shoe3").fadeOut().fadeIn();;
});
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".shoemain", 10, {y:500})
    .to(".shoetext", 10, {y:400},"-=10")
    .to(".desigenedtext",10,{y:500},"-=10")
    .to(".withtext",10,{y:500},"-=10")
    .to(".prefectiontext",10,{y:500},"-=10")
    .to(".red",10,{y:500},"-=10")
    .to(".red1",10,{y:-200},"-=10")
    .to(".topbtn",10,{y:-200},"-=10")
    .to(".topbtn2",10,{y:-200},"-=10")
    .to(".selecttext",10,{y:-200},"-=10")
    .to(".shoe1",10,{y:100},"-=10")
    .to(".shoe1head",10,{y:100},"-=10")
    .to(".shoe1para",10,{y:100},"-=10")
    .to(".btn1",10,{y:100},"-=10")
    .to(".shoe2",10,{y:100},"-=10")
    .to(".shoe2head",10,{y:100},"-=10")
    .to(".shoe2para",10,{y:100},"-=10")
    .to(".btn3",10,{y:100},"-=10")
    .to(".shoe3",10,{y:100},"-=10")
    .to(".shoe3head",10,{y:100},"-=10")
    .to(".shoe3para",10,{y:100},"-=10")
    .to(".btn2",10,{y:100},"-=10")
    .to(".black",10,{y:500},"-=10");

 let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
})
  .setTween(timeline)
  
  .addTo(controller);