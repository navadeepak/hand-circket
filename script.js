let status_display=document.getElementById("game_status")
let target=document.getElementById("target_scr_act")
let who=document.getElementById("player_status_act")
let player_run=document.getElementById("crt_run_act_player")
let computer_run=document.getElementById("crt_run_act_computer")
const buttons_value=document.querySelectorAll(".buttons")
const restartBut=document.getElementById("restart")
let alter_target=document.getElementById("imp-target");
let alter_target_temp=0
let checkout=true;
var playerClickButtonValue=0;
var player_display_value=0 
status_display.innerHTML="Game Start<br>You First Batting"
target.innerHTML=0
who.innerHTML="You batting"
player_run.innerHTML=0
computer_run.innerHTML=0

restartBut.addEventListener('click',restart)
buttons_value.forEach(cl=>cl.addEventListener('click',player_button_click))

function player_button_click(){

    var computerClickButtonValue=Math.floor(Math.random()*6)+1;
    playerClickButtonValue=this.dataset.run;
    playerClickButtonValue=parseInt(playerClickButtonValue)
    console.log("Player  run:",playerClickButtonValue,"computer run:",computerClickButtonValue);
    outCheck(playerClickButtonValue,computerClickButtonValue)
}
function outCheck(playerClickButtonValue,computerClickButtonValue){
    if(checkout)
    {
        innings1(playerClickButtonValue,computerClickButtonValue)
        who.innerHTML="You batting"
    }
    else if(!checkout){
        innings2(playerClickButtonValue,computerClickButtonValue)
        who.innerHTML="Computer batting"
    }
}
function innings1(playerClickButtonValue,computerClickButtonValue){
    console.log("innings 1");
    status_display.innerHTML="1st Innings"
    console.log(playerClickButtonValue,computerClickButtonValue);
    if(playerClickButtonValue===computerClickButtonValue && checkout)
    {
        who.innerHTML="Computer batting";
        status_display.innerHTML="Batsman Out<br>2nd Innings Starts"
        console.log("You Out 2nd Innings Start");
        player_run.innerHTML=playerClickButtonValue
        computer_run.innerHTML=computerClickButtonValue
        checkout=false;
    }
    else{
        player_display_value=player_display_value+playerClickButtonValue;
        target.textContent=player_display_value;
        player_run.innerHTML=playerClickButtonValue
        computer_run.innerHTML=computerClickButtonValue
    }
}
function innings2(playerClickButtonValue,computerClickButtonValue){
    console.log("innings 2");
    status_display.innerHTML="2nd Innings"
    console.log(playerClickButtonValue,computerClickButtonValue);
    console.log(typeof(player_display_value));
    if(player_display_value===alter_target_temp || player_display_value < alter_target_temp){
        status_display.innerHTML="Computer Win<br>You Lose"
        who.innerHTML="You batting";
        console.log("computer was win");
        player_run.innerHTML=playerClickButtonValue
        computer_run.innerHTML=computerClickButtonValue
        alter_target.innerHTML=0
        alter_target_temp=0
        player_display_value=0
        checkout=true
    }
    else if(playerClickButtonValue===computerClickButtonValue && !checkout){
        status_display.innerHTML="You Win<br>Computer Lose";
        who.innerHTML="You batting";
        console.log("player was win");
        player_run.innerHTML=playerClickButtonValue
        computer_run.innerHTML=computerClickButtonValue
        alter_target.innerHTML=0
        target.innerHTML=0
        player_display_value=0
        player_run.innerHTML=0
        computer_run.innerHTML=0
        alter_target_temp=0
        checkout=true;
    }
    else{
        alter_target_temp=alter_target_temp+computerClickButtonValue;
        player_run.innerHTML=playerClickButtonValue
        computer_run.innerHTML=computerClickButtonValue
        alter_target.innerHTML=alter_target_temp
    }
}
function restart(){
    status_display.innerHTML="Game Start"
    who.innerHTML="You batting"
    target.innerHTML=0;
    alter_target.innerHTML=0;
    alter_target_temp=0;
    player_run.innerHTML=0;
    computer_run.innerHTML=0;
    playerClickButtonValue=0;
    player_display_value=0; 
    checkout=true;
}
