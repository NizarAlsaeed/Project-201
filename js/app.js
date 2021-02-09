'use strict';
//this function is called by the button in the html file using onclick attribute
function start() {
  let score=0;
  let userName = prompt('Enter your name');
  alert('Let\'s start, ' + userName);
  let q1 = prompt('i am +25 years old \n Y or N').toLowerCase();
  switch (q1) {
  case q1 = 'y':
  case q1 = 'yes':
    alert('You are Right');
    score++;
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
    score++;
  }else if(q2 === 'n' || q2 === 'no'){
    console.log('not exactly');
  }else{
    alert('You can answer either yes / y or no / n only');
  }

  let q3 = prompt('I\'ve never travelled outside Jordan \n Y or N').toLowerCase();
  if (q3 === 'n' || q3 === 'no'){
    console.log('You are Right');
    score++;}
  else if(q3 === 'y' || q3 === 'yes')
    console.log('not exactly');
  else
    alert('You can answer either yes / y or no / n only');

  let q4 = prompt('I live in Amman \n Y or N').toLowerCase();
  if (q4 === 'y' || q4 === 'yes'){
    console.log('You are Right');
    score++;}
  else if (q4 === 'n' || q4 === 'no')
    console.log('not exactly');
  else
    alert('You can answer either yes / y or no / n only');

  let q5 = prompt('My laptop brand is hp \n Y or N').toLowerCase();
  if (q5 === 'n' || q5 === 'no'){
    console.log('You are Right');
    score++;}
  else if (q5 === 'y' || q5 === 'yes')
    console.log('not exactly');
  else
    alert('You can answer either yes / y or no / n only');

  alert('It is a lot of fun! \ni want you to guess a number in my head ');

  //---------------------------------Lab-03-----------------------------------------------

  const HDNUM = 6;
  let q6, attempts=4, correct=false;
  while(attempts && !correct){
    q6 = parseInt(prompt('guess a number between 0 and 10 \nyou have only '+attempts+' attempts'));
    if (!(q6>=0 && q6<=10))
      alert('please enter a number between 0 and 10');
    if (q6 === HDNUM){
      alert('Correct answer, Good job');
      correct=true;
      score++;
      break;}
    else if (Math.abs(q6-HDNUM)>=5)
      alert('too far');
    else if (Math.abs(q6-HDNUM)>=3)
      alert('far');
    else if (Math.abs(q6-HDNUM)>=2)
      alert('somehow close');
    else if (Math.abs(q6-HDNUM)>=1)
      alert('too close!');
    attempts-=1;
  }
  if (!attempts)
    alert('sorry, your are out of attempts\n the answer is '+HDNUM);

  // Question 7..........................

  alert('now moving to quiz # 7\n guess any movie from my movies list');
  let movies = ['maze the runner','thor','batman','joker','toy story'];
  let q7;
  attempts=6;
  correct=false;
  while(attempts && !correct){
    q7 = prompt('guess a movie, you have '+attempts+' attempts').toLowerCase();
    for(let i = 0; i< movies.length; i++){
      if(q7 === movies[i]){
        alert('Correct answer, Good job');
        correct=true;
        score++;
        break;}
    }
    attempts-=1;
  }
  if (!attempts)
    alert('sorry, your are out of attempts\n the list contains: '+movies);

  alert('Your Score = '+score+' out of 7');
}

