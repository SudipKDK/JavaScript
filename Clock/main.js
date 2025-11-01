const clock=document.getElementById('clock');


setInterval(function Watch(){
    let currentTime= new Date();
    let hour=currentTime.getHours();
    let min =currentTime.getMinutes();
    let sec =currentTime.getSeconds();
    console.log(`${hour}:${min}:${sec}`)
    clock.innerText = `${hour}:${min}:${sec}`
},
1000)



