let answers = [
  'It is certain',
'It is decidedly so',
'Without a doubt',
'Yes, definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Do not count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'
];


let length = answers.length;

let randomIndex = (length) => {
  return Math.floor((Math.random() * length));
};

let answer = answers[randomIndex(length)];

let fortune = () => {
  let mainDiv = document.getElementById('main');
  mainDiv.innerHTML = answer;
}

let buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', fortune);

let resetElement = document.getElementById('reset')
resetElement.addEventListener('click', () => {
  location.reload();
});
