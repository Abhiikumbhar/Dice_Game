//for generating random for dice1
var randomnum1 = (Math.floor(Math.random() * 6) + 1);
var randomDiceImg1 = "dice" + randomnum1 + ".png";
var randomImgSource1 = "images/" + randomDiceImg1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource1);

//for generating random for dice2
var randomnum2 = Math.floor(Math.random() * 6)+1;
var randomDiceImg2 = "dice" + randomnum2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);


// announceing winner 
if(randomnum1 > randomnum2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 WIN !!";
}
else if(randomnum2 > randomnum1)
{
    document.querySelector("h1").innerHTML = "Player 2 WIN !!🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩DRAW🚩";
}
