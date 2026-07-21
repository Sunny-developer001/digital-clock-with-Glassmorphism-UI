
 function clockUpdate() {
  const newtime = new Date();

  let hours = newtime.getHours();
  let minutes = newtime.getMinutes();
  let seconds = newtime.getSeconds();
  
  if (hours<10) hours="0"+hours;
  if (seconds<10) seconds="0"+seconds;
  if (minutes<10) minutes="0"+minutes;

  let time = document.querySelector("#hours");
  time.textContent = `${hours}:${minutes}:${seconds}`;
}
 
clockUpdate();
setInterval(clockUpdate, 1000);