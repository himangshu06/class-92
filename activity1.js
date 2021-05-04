score = 0;
function UpdateScore(){
    score = score+1;
    document.getElementById("score").innerHTML="score"+score;
}
function Save(){
    localStorage.setItem("score",score);
}
function Next_page(){
    window.location="activity_2.html";
}