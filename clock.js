const clock = document.querySelector("h2#clock");
const YMD = document.querySelector("h2#date");

function getClock(){
    const date = new Date();
    YMD.innerText=`${String(date.getFullYear())}/${String(date.getMonth()+1).padStart(2,"0")}/${String(date.getDate()).padStart(2,"0")}`
    clock.innerText=`${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`
}
getClock();
setInterval(getClock,1000);