const colors = ["tomato","seagreen","skyblue","rgb(139, 211, 211)"];

$(".colorbtn").click(function(){
    randomNumber = Math.floor(Math.random()*colors.length);
    $("body").css("background-color",colors[randomNumber]);
    document.getElementById("color").textContent = colors[randomNumber];
})