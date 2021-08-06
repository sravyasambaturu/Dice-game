var diceThrow = Math.floor(Math.random()*6)+1;

var diceImg = "images/dice" + diceThrow + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", diceImg);

var diceThrow2 = Math.floor(Math.random()*6)+1;

var diceImg2 = "images/dice" + diceThrow2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", diceImg2);

if(diceThrow > diceThrow2)
{
    document.querySelector("h1").innerHTML = " person1  wins!";
}
else if (diceThrow2 > diceThrow)
{
    document.querySelector("h1").innerHTML =" person2  wins!" ;
}
else
{
    document.querySelector("h1").innerHTML = "It's a Draw";
}


  