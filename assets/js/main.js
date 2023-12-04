function init(){
    console.info("init run");
}

function CheckHEX(){
    const CurrentHEX = document.getElementById("CurrentHEX").value;
    const WantedHEX = document.getElementById("WantedHEX").value;
    const CurrentHEXArea = document.getElementById("CurrentHEXColor");
    const WantedHEXArea = document.getElementById("WantedHEXColor");
    const InterpolatedHEXColorArea = document.getElementById("InterpolatedHEXColor");

    const HexColor = hexColorConverter(CurrentHEX,WantedHEX)
    WantedHEXArea.style.backgroundColor = WantedHEX;
    CurrentHEXArea.style.backgroundColor = CurrentHEX;
    InterpolatedHEXColor.style.backgroundColor = HexColor.interpolatedColor


    console.log(HexColor);
    
}