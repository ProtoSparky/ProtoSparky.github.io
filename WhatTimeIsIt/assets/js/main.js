function init(){
    
    //set up main container
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "50%";
    container.style.top = "50%";
    container.style.transform ="translate(-50%,-50%)";    
    document.getElementById("content-fullscreen").appendChild(container);

    //spawn text
    const text = document.createElement("div");
    text.className ="text";
    text.id = "time"; 
    text.innerHTML = "UWU";
    text.style.color = AccessCSSVar("--col_normalTXT"); 
    text.style.fontSize = "60"; 
    text.style.textAlign = "center"; 
    container.appendChild(text); 
    setInterval(WriteText,1000); 
}

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // JavaScript months are 0-based
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return {
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}
function WriteText(){
    const time = getCurrentDateTime(); 
    const string = "The Time is <b>" + time.hours + ":" + time.minutes + ":" + time.seconds + "</b><br>" + "And if you're living under a rock, the date is <b>" + time.day + "/" + time.month + "/" + time.year + "</b>"; 
    document.getElementById("time").innerHTML = string; 
    console.log("refresh"); 
}

// Example usage
const dateTime = getCurrentDateTime();
console.log(JSON.stringify(dateTime));
