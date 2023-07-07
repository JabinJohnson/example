let number = parseInt(prompt("How many rounds?"));

let win = 0;
let lose = 0;
let tie = 0;
for(let i=0; i<number; i++){
  let userChoice = prompt("Rock,Paper,or Scissors?");
  let random = Math.floor(Math.random() * 3 );
  let computer = 0;
  console.log(random);
  // Translate this random variable to computer choice.
  if (userChoice=="Rock" && computer=="Paper"){
    alert("You Lose!");
    count+=
    console.log(lose);
  }
  if (userChoice=="Paper" && computer=="Scissors"){
    alert("You Lose!");
    count+=
    console.log(lose);
  }
  if (userChoice=="Scissors" && computer=="Rock"){
    alert("You Lose!");
    count+=
    console.log(lose);
  }
  if(userChoice=="Rock" && computer=="Scissors"){
    alert("You Win!");
    count+=
    console.log(win);
  }
  if(userChoice=="Scissors" && computer=="Paper"){
    alert("You Win!");
    count+=
    console.log(win);
  }
  if(userChoice=="Paper" && computer=="Rock"){
    alert("You Win!");
    count+=
    console.log(win);
  } 
  if (userChoice == computer){
    alert("Tie!");
    count+=
    console.log(tie);
  }
}
// while (number <= pick){
//     count++;
//  if (userChoice == getRndInteger) {
//     alert("Tie!")
//     counter++; 
// }
// if (userChoice = 0, getRndInteger = 2) {
//   alert("You Win!")
//   counter++; 
// }
// if (userChoice = 1, getRndInteger = 0){
//   alert("You Win!")
//   counter++
// }
// if (userChoice = 2, getRndInteger = 1){
//   alert("You Win!")
//   counter++
// }
// else{
//   alert("You Lose!")
//   counter++
// }; }
// let Rock = 0;
// let Paper = 1;
// let Scissors = 2;
  