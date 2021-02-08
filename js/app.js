'use strict';

function start() {
  let userName = prompt('Enter your name');
  alert('Let\'s start, ' + userName);
  let q1 = prompt('i am +25 years old \n Y or N');
  console.log(q1);
  switch (q1.toLowerCase()) {
  case q1 = 'y':
    alert('You are Right');
    alert('open the console to know the results of the next quizes');
    break;
  case q1 = 'n':
    alert('not exactly')
    alert('open the console to know the results of the next quizes');
    break;
  }
  let q2 = prompt('I like Liverbool \n Y or N')
  if (q2.toLowerCase() == 'y') { console.log('You are Right'); } else console.log('not exactly');
  let q3 = prompt('I\'ve never travelled outside Jordan \n Y or N');
  if (q3.toLowerCase() == 'n') { console.log('You are Right'); } else console.log('not exactly');
  let q4 = prompt('I live in Amman \n Y or N')
  if (q4.toLowerCase() == 'y') { console.log('You are Right'); } else console.log('not exactly');
  let q5 = prompt('My laptop brand is hp \n Y or N')
  if (q5.toLowerCase() == 'n') { console.log('You are Right'); } else console.log('not exactly');
}