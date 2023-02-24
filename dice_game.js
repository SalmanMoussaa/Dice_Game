window.onload=function(){
    function randoms(){
        var random_images= new Array();
        random_images[0]="Assets/dice-1.png"
        random_images[1]="Assets/dice-2.png"
        random_images[2]="Assets/dice-3.png"
        random_images[3]="Assets/dice-4.png"
        random_images[4]="Assets/dice-5.png"
        random_images[5]="Assets/dice-6.png"
        var random_1 = Math.floor(Math.random()*random_images.length);  
        var random2 = Math.floor(Math.random()*random_images.length);  
        document.getElementById("img-1").src=random_images[random_1];
        document.getElementById("img-2").src=random_images[random2];
        if(random_1==random2){
            document.getElementById("win").innerHTML="DRAW";
        }else if(random_1>random2){
            document.getElementById("win").innerHTML="Player 1 winner";

        }else{
            document.getElementById("win").innerHTML="player 2 winner";

        }




    }
    var h1 = document.getElementById("refresh");
    h1.addEventListener("click",randoms);
    randoms();



}