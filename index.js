//generating random number
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//assigning random images
document.querySelectorAll("img")[0].setAttribute("src", `/images/dice${randomNumber1}.png`);

document.querySelectorAll("img")[1].setAttribute("src", `/images/dice${randomNumber2}.png`);


//conditions for result
if (randomNumber1 >randomNumber2){
    document.querySelector("h1").innerHTML = "👈 Player 1 won!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won! 👉";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw.";
}

