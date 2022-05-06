//Username to specify a greeting if name provided
let userName = 'Sonja'

if (userName) {
  console.log(`Hello, ${userName}!`);
 } else console.log('Hello!');

//Providing a question, name carries.
let userQuestion = 'Is the head a foot?'

if(userName)
{console.log(`${userName}, you asked: "${userQuestion}".`)
} else {console.log(`You asked: "${userQuestion}".`)}

//Possible eightBall answers. 
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''


switch (randomNumber) {
  case 0 : 
  eightBall = 'It is certain.';
  break;
  case 1 : 
  eightBall = 'It is decidedly so.';
  break;
  case 2 : 
  eightBall = 'Reply hazy, try again.';
  break;
  case 3 : 
  eightBall = 'Cannot predict now.';
  break;
  case 4 : 
  eightBall = 'Do not count on it.';
  break;
  case 5 : 
  eightBall = 'My sources say no.';
  break;
  case 6 : 
  eightBall = 'Outlook not so good.';
  break;
  case 7 : 
  eightBall = 'Signs point to yes.';
  break;
}
//Prints the answer
console.log(`The magic eight ball answered: ${eightBall}`)