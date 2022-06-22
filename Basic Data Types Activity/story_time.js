//open this in browser
//after 8 sec, slider will automatically move

// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE

let name = prompt("enter your name");
let genre = prompt("horror/fantasy (type correctly)");
let place = prompt("where do you live?");
let greeting = "hello";

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE

let year = prompt("enter year of the story");
let age = prompt("enter your age");

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE

let bookInfo = [];

bookInfo[0] = {
  title: 'No title',
  text: [`My name is ${name} and I live in ${place}. My daughter woke me around 11:50 last night. My wife and I had picked her up from her friend Sally's birthday party, brought her home, and put her to bed.`, `My wife went into the bedroom to read while I fell asleep watching the Braves game.\"Daddy,\" she whispered, tugging my shirt sleeve. \"Guess how old I\'m going to be next month.\"\"I don\'t know, beauty,\ I said as I slipped on my glasses. \"How old?\"She smiled and held up four fingers.It is 7:30 now. My wife and I have been up with her for almost 8 hours. She still refuses to tell us where she got them.`],
  age: 15,
  genre: 'horror',
  time: '3 min',
  page: 2,
}

bookInfo[1] = {
  title: 'We are Warriors',
  text: [`We were only warriors. Eight-year-olds forging new frontiers, watching Rome fall. The current year is ${year}. We were brothers in arms, bandits, thieves - but you named me ${name}. `, `We shaped palace walls from snow, tore through forbidden forest with plastic machetes. We ate poisoned berries like our stomachs were made of Excalibur, melted down and recast. We could never die. You, with your cardboard helmet and shield, were noblest of all. You gutted more dragons than the rest of us combined. But I, with my cheap silk cape and tissue paper crown, was stronger. I was never warrior, never damsel. I was made to rule.`],
  age: 10,
  genre: 'fantasy',
  time: '3 min',
  page: 2,
}



// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE

let liked = true;

// TODO: Print your story to the console.
// YOUR CODE GOES HERE

if(genre == 'horror') {
  console.log(bookInfo[0].text[0], bookInfo[0].text[1]);
} else if(genre == 'fantasy') {
  console.log(bookInfo[1].text[0], bookInfo[1].text[1]);
} else {
  console.log('select genre again');
}