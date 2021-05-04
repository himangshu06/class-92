function back(){
    window.location="activity_1.html";
}
function Get_score(){
    score = localStorage.getItem("score");
    document.getElementById("Update").innerHTML="<h1>score:"+score+"</h1>";
}