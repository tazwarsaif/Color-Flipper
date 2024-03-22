const colors = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

$(".colorbtn").click(function(){
    let hex = "#"
    for(i=0; i<6;i++){
        randomID = Math.floor(Math.random()*colors.length);
        hex += colors[randomID];
    }
    $("body").css("background-color",hex);
    console.log(hex)
    document.getElementById("color").textContent = hex;
})