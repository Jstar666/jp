



//显示日期
function displayDate()
{
	document.getElementById("demo").innerHTML=Date();
}

var $button = document.querySelector('.button');
$button.addEventListener('click'), function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
}
 //实时计时器
 function startTime(){
 	var today=new Date();
 	var h=today.getHours();
 	var m=today.getMinutes();
 	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
 	m=checkTime(m);
 	s=checkTime(s);
 	document.getElementById('txt').innerHTML=h+":"+m+":"+s;
 	t=setTimeout(function(){startTime()},500);
 }
 function checkTime(i){
 	if (i<10){
 		i="0" + i;
 	}
 	return i;
 }
 

 function displayDate(){
 	document.getElementById("demo").innerHTML=Date();
 }
