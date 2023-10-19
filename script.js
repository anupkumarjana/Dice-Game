let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageNumber1 = `dice${randomNumber1}.png`;

let randomImageLocation1 = `images/${randomImageNumber1}`;

document.querySelector(".img1").setAttribute("src", randomImageLocation1);

// -------------------------------------------------------------------


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageNumber2 = `dice${randomNumber2}.png`;

let randomImageLocation2 = `images/${randomImageNumber2}`;

document.querySelector(".img2").setAttribute("src", randomImageLocation2);

// -----------------------------------------------------------------------

// console.log(randomImageNumber);
if (randomImageNumber1 > randomImageNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Won";
} else if (randomImageNumber1 < randomImageNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Won";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
