var name ="Stephanie";
var age = 19;
var isGirl = true;
var fruits = ["apple","banana","peach"];

alert(name);
alert(age);
alert(isGirl);
alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);

var addition= function(num){
return num+10;
};
var age = 18;
var trueage= addition(age);
alert(trueage);

var addition= function(num){
return num+10;
};
var age = 19;
var trueage2= addition(age);
alert(trueage2);



document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color="blue";

document.getElementsByClassName("byclass")[0].innerHTML="我來自Class";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";

document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML="ddd";
document.getElementsByTagName("p")[0].style.color="blue";