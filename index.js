function clockStart(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours>12){
        hours=hours-12;
        let am=document.getElementById("am")
        am.innerText="PM";
    }
    else
    {
        let am=document.getElementById("am")
        am.innerText="AM";

    }

    console.log(hours,minutes,seconds);

    let hrs = document.getElementById("hrs");
    hrs.innerText = hours;
    let mins = document.getElementById("mins");
    mins.innerText = minutes;
    let secs = document.getElementById("secs");
    secs.innerText = seconds;

    
}
    
setInterval(()=>{
    clockStart();
},1000)

let somoi = new Date();
let hour = somoi.getHours();

    
function handleAlarm(){
    let morning=document.getElementById("time1")
    let afternoon=document.getElementById("time2")
    let evening=document.getElementById("time3")
    let night=document.getElementById("time4")
    let message=document.getElementById("message")
    let ring=document.getElementById("ring")
    let image=document.getElementById("image")


    console.log("Alarm");
   if(parseInt(afternoon.value)===hour){
    message.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    ring.innerHTML="LET'S HAVE SOME LUNCH!!!";
    image.src="Lunch_time.jpg"
   }
   else if(parseInt(evening.value)===hour){
        message.innerText="GOOD EVENING !!";
        ring.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        image.src="Evening_image.png";
    }
    else if(parseInt(night.value)===hour){
        message.innerText="GOOD NIGHT !!";
        ring.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        image.src="Night_time.jpg.jpg";
    }
    else if(parseInt(morning.value)===hour){
        message.innerText="GOOD MORNING!! WAKE UP !!";
        ring.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        image.src="./Component 30 – 1.png";
    }
    else{
        message.innerText="GOOD MORNING!! WAKE UP !!";
        ring.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        image.src="./Component 30 – 1.png";
    }
   
}
let changetext=document.getElementById("change_text");
changetext.addEventListener("mouseenter",function(){
    changetext.innerText="Party time !!";
    changetext.style.backgroundColor="transparent linear-gradient(113deg, #F1A7C5 100%, #FC5EFF 81%, #CB52F8 40%, #6E54EC 0% ) 0% 0% no-repeat padding-box"
})
changetext.addEventListener("mouseleave",function(){
    changetext.innerText="Set Alarm"
    changetext.style.backgroundColor="transparent linear-gradient(113deg, #6E54EC 0%, #CB52F8 40%, #FC5EFF 81%, #F1A7C5 100%) 0% 0% no-repeat padding-box";
})

