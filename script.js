let sky = document.getElementById("sky");
let text = document.getElementById("text");
let City = document.getElementById("CT");
//for about me section
let am = document.getElementById("AM");
let txt = document.getElementById("txt1");
let am2 = document.getElementById("AM2");
let am3 = document.getElementById("AM3");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
//for college section
let Cover = document.getElementById("cover");
let Covc = document.getElementById("covcon");


window.addEventListener('scroll', function(){
  var value = window.scrollY;

  sky.style.top = value * 0.9 + 'px';
  City.style.left = value * 14 + 'px';
  text.style.fontSize = value * 0.2 + 'px';
  text.style.top = value * 0.5 + 'px';
  
  
})
//for about me section
am.addEventListener("mouseover", mouseOver);
am.addEventListener("mouseout", mouseOut);
txt.addEventListener("mouseover", mouseOver);
txt.addEventListener("mouseout", mouseOut);
am2.addEventListener("mouseover", mouseOver2);
am2.addEventListener("mouseout", mouseOut2);
txt2.addEventListener("mouseover", mouseOver2);
txt2.addEventListener("mouseout", mouseOut2);
am3.addEventListener("mouseover", mouseOver3);
am3.addEventListener("mouseout", mouseOut3);
txt3.addEventListener("mouseover", mouseOver3);
txt3.addEventListener("mouseout", mouseOut3);
Covc.addEventListener("mouseover", mouseOver4);
Covc.addEventListener("mouseout", mouseOut4);

//for about me section
function mouseOver() {
  txt.style.backdropFilter= "brightness(20%)";
  txt.style.visibility= "visible";
}

function mouseOut() {
  am.style.filter= "brightness(100%)";
  txt.style.backdropFilter= "blur(0px)";
  txt.style.visibility= "hidden";
}

function mouseOver2() {
  txt2.style.backdropFilter= "brightness(40%)";
  txt2.style.visibility= "visible";
}

function mouseOut2() {
  am.style.filter= "brightness(100%)";
  txt2.style.backdropFilter= "blur(0px)";
  txt2.style.visibility= "hidden";
}

function mouseOver3() {
  txt3.style.backdropFilter= "brightness(40%)";
  txt3.style.visibility= "visible";
}

function mouseOut3() {
  am.style.filter= "brightness(100%)";
  txt3.style.backdropFilter= "blur(0px)";
  txt3.style.visibility= "hidden";
}
//for college section
function mouseOver4() {
  Cover.style.marginLeft ="-300px";
}

function mouseOut4() {
  Cover.style.marginLeft ="2300px";
}