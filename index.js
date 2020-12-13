console.log("------- Marvel Multi-verse Quiz---------\n")
var readlineSync=require('readline-sync');
var userName=readlineSync.question("Enter Your Name ");
console.log("Hello "+userName+", Welcome to the Quiz \n")
console.log("----------***************-----------");
console.log("# This Quiz Consists of 8 questions.\n# Every Right answer awards you 100 pionts. \n# No negative points for wrong answers. \n# ENJOY \n ");
console.log("--------****************-------------\n");
var score=0;
var userConsent=readlineSync.question("Are you ready to play? ");
if(userConsent==="yes"){
  console.log("\n\n<<<<<<--------Play--------->>>>>>>\n");
function playquiz(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
  score=score+100;
  console.log("Congratulations '"+userAnswer+"' is the right answer");
  console.log("Your Score is "+score);
  console.log("-----");}
  else{
  console.log("oops...Wrong answer try the next question!!! ")
  console.log("Your Score is still "+score);
  console.log("-----");}
  }
  
  playquiz("Q.1- In which year the movie Iron Man released?\n ","2008");
  playquiz("Q.2- What is the name of Thor's Hammer? \n","mjolnir");
  playquiz("Q.3- What is Captain America's shield made of?\n ","vibranium",);
  playquiz("Q4.- The Flerkens are a race of extremely dangerous aliens that resembles what?\n ","cat");
  playquiz("Q5.- what was the name of Loki's alien army?\n ","chitauri");
  playquiz("Q6.- Who does Mad titan sacrifice to acquire the Soul stone?\n ","gamora");
  playquiz("Q7.- How many Infinity Stones are there?\n","6");
  playquiz("Q8.- what were Tony's last words?\n","i am ironman");
  console.log("-------Your Final Score is ["+score+"]-------")
  console.log("Thanks "+userName+" for playing. \n Hope you had a fun time. ");}
  else{
    if(userConsent==="no")
    console.log("\nSorry to Hear that...Now Buzz off please");}