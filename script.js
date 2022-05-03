
const btnPlay = document.querySelector('#start');

btnPlay.addEventListener('click', promptFunction)

function promptFunction() {
  let player = prompt("Please enter your name", " ");
  if (player != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + player + ", Let's play!";
    alert("You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the six alien ships with your lasers. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. You get to attack first. After you have destroyed a ship, you have the option to make a hasty retreat. Let the battle begin!")
  }
}

