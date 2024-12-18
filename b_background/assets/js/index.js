var settings = null;
function main(){
    console.log("uwu");
    settings = {
        "ball_max":15, //minimum amount of balls
        "ball_min":5, //max amount of balls
        "current_ball":null, //do not edit me
        "style":{
            "ball_opacity":0.4, //percent
        },
        "ball_size_max":150,
        "ball_size_min":50,
        "temp":{},
        "ballMoveInterval":5000
    
    };
    spawn_balls(/*Enter a fixed amount of balls here*/);
    setInterval(giveNewPos, settings.ballMoveInterval);

}
function spawn_balls(fixed_ball_amount){
    settings.current_ball = RandomRangedIntiger(settings.ball_min,settings.ball_max);
    if(fixed_ball_amount != undefined){
        settings.current_ball = fixed_ball_amount; 
    }
    console.info("Spawning  " + settings.current_ball + " balls");

    for(let current_ball = 0; current_ball < settings.current_ball;current_ball ++ ){
        //iterate over all balls
        const ball = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        const size_const = RandomRangedIntiger(settings.ball_size_min, settings.ball_size_max); 
        const size = {
            "x":size_const,
            "y":size_const
        };
        settings.temp[current_ball] = size;
        const pos = {
            "x":RandomRangedIntiger(0, (window.innerWidth - size.x) - size.x),
            "y":RandomRangedIntiger(0, (window.innerHeight - size.y) - size.y),
        };

        console.log(current_ball);
        ball.style.position = "absolute";
        ball.style.width = size.x;
        ball.style.height = size.y;
        ball.style.top = pos.y;
        ball.style.left = pos.x;
        ball.style.opacity = settings.style.ball_opacity;
        ball.id = "ball_"+ current_ball;
        ball.style.transition = "all " + (settings.ballMoveInterval/900)+"s ease-in-out";
        document.body.appendChild(ball);
        const circle =  document.createElementNS("http://www.w3.org/2000/svg", "circle");
        //place circle in the center
        circle.setAttribute("cx",size.x/2);
        circle.setAttribute("cy", size.x/2);
        circle.setAttribute("r",(size.x/2));
        circle.setAttribute("fill",AccessCSSVar("--col_accent_" + RandomRangedIntiger(1,7))); //pick random color from css 
        ball.appendChild(circle);



        
    }

}
function giveNewPos(){
    for(let current_ball = 0; current_ball < settings.current_ball;current_ball ++ ){
        const ball = document.getElementById("ball_" + current_ball);
        const size = settings.temp[current_ball];
        const pos = {
            "x":RandomRangedIntiger(0, (window.innerWidth - size.x) - size.x),
            "y":RandomRangedIntiger(0, (window.innerHeight - size.y) - size.y),
        };
        ball.style.top = pos.y;
        ball.style.left = pos.x;

    }
}