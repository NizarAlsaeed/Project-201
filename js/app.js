'use strict';
//this function is called by the button n the html file usng onclick attribute
function start() {
  let userName = prompt('Enter your name');
  alert('Let\'s start, ' + userName);
  let q1 = prompt('i am +25 years old \n Y or N').toLowerCase();
  console.log(q1);
  switch (q1) {
  case q1 = 'y':
  case q1 = 'yes':
    alert('You are Right');
    alert('open the console to know the results of the next quizes');
    break;
  case q1 = 'n':
  case q1 = 'no':
    alert('not exactly');
    alert('open the console to know the results of the next quizes');
    break;
  default:
    alert('You can answer either yes / y or no / n only');
  }

  let q2 = prompt('I like Liverbool \n Y or N').toLowerCase();
  if (q2 === 'y' || q2 === 'yes'){
    console.log('You are Right');
  }else if(q2 === 'n' || q2 === 'no'){
    console.log('not exactly');
  }else{
    alert('You can answer either yes / y or no / n only');
  }

  let q3 = prompt('I\'ve never travelled outside Jordan \n Y or N').toLowerCase();
  if (q3 === 'n' || q3 === 'no')
    console.log('You are Right');
  else if(q3 === 'y' || q3 === 'yes')
    console.log('not exactly');
  else
    alert('You can answer either yes / y or no / n only');

  let q4 = prompt('I live in Amman \n Y or N').toLowerCase();
  if (q4 === 'y' || q4 === 'yes')
    console.log('You are Right');
  else if (q2 === 'n' || q4 === 'no')
    console.log('not exactly');
  else
    alert('You can answer either yes / y or no / n only');

  let q5 = prompt('My laptop brand is hp \n Y or N').toLowerCase();
  if (q5 === 'n' || q5 === 'no')
    console.log('You are Right');
  else if (q5 === 'y' || q5 === 'yes')
    console.log('not exactly');
  else
    alert('You can answer either yes / y or no / n only');

}
