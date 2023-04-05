function displayTime() {
  const element = document.getElementById("clock"); 

  const now = new Date(); 
  const hours = now.getHours(); 
  const minutes = now.getMinutes(); 

  
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  element.textContent = timeString; 
}


setInterval(displayTime, 500);