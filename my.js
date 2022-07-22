for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        switch(buttonInnerHtml){
            case "sa":var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "re":var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            case "ga":var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "ma":var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "pa":var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "ma":var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "ga":var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        }
    });
}
