
/* Author @prasenjitghose36 */

let EndDate=new Date(2020,10,08);//8th October my little sis's birthday

function update(days,hours,minutes,seconds){
  
  if(seconds==0){
  	//calculate
  	millis=EndDate.getTime()-Date.now();

    let days=Math.trunc(millis/86400000);
    millis%=86400000;

    let hours=Math.trunc(millis/3600000);
    millis%=3600000;

    let minutes=Math.trunc(millis/60000);
    millis%=60000;

    let seconds=Math.trunc(millis/1000);

    return {days,hours,minutes,seconds};
  }else{
  	seconds--;
    return {days,hours,minutes,seconds};
  } 
}

function begin(){

  let days=document.getElementById("days").innerHTML;
  let hours=document.getElementById("hours").innerHTML;
  let minutes=document.getElementById("minutes").innerHTML;
  let seconds=document.getElementById("seconds").innerHTML;

  let data=update(days,hours,minutes,seconds);

  document.getElementById("days").innerHTML=data.days;
  document.getElementById("hours").innerHTML=data.hours;
  document.getElementById("minutes").innerHTML=data.minutes;
  document.getElementById("seconds").innerHTML=data.seconds;
}


setInterval(begin,1000);