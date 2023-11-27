import express from "express";
import getRandom from "getrandomjs";
import cors from 'cors'
//array that shows what score that each letter contain
let people = [
  { letter: "a", score: 20 },
  { letter: "A", score: 20 },
  { letter: "e", score: 20 },
  { letter: "E", score: 20 },
  { letter: "i", score: 20 },
  { letter: "O", score: 20 },
  { letter: "U", score: 20 },
  { letter: "o", score: 20 },
  { letter: "u", score: 20 },
  { letter: "b", score: 15 },
  { letter: "B", score: 15 },
  { letter: "c", score: 15 },
  { letter: "C", score: 15 },
  { letter: "d", score: 15 },
  { letter: "D", score: 15 },
  { letter: "f", score: 15 },
  { letter: "F", score: 15 },
  { letter: "f", score: 15 },
  { letter: "h", score: 10 },
  { letter: "G", score: 10 },
  { letter: "H", score: 10 },
  { letter: "g", score: 10 },
  { letter: "j", score: 5 },
  { letter: "J", score: 5 },
  { letter: "k", score: 5 },
  { letter: "K", score: 5 },
  { letter: "L", score: 5 },
  { letter: "l", score: 5 },
  { letter: "M", score: 5 },
  { letter: "m", score: 5 },
  { letter: "n", score: 0 },
  { letter: "N", score: 0 },
  { letter: "p", score: 0 },
  { letter: "P", score: 0 },
  { letter: "Q", score: 0 },
  { letter: "q", score: 0 },
  { letter: "r", score: 10 },
  { letter: "R", score: 10 },
  { letter: "s", score: 10 },
  { letter: "S", score: 10 },
  { letter: "v", score: 15 },
  { letter: "V", score: 15 },
  { letter: "w", score: 15 },
  { letter: "W", score: 15 },
  { letter: "u", score: 0 },
  { letter: "X", score: 0 },
  { letter: "x", score: 0 },
  { letter: "y", score: 0 },
  { letter: "Y", score: 0 },
  { letter: "z", score: 0 },
  { letter: "Z", score: 0 },
];
const port = process.env.PORT || 3001;

const app = express();
app.use(cors({
  origin: '*'
}));
app.get("/Letter/:Name/", (req, res) => {
  //user are required to put in two names that are connect by '+'
  let names = req.params.Name.split("+");

  let matchingScore = 0;
  //calculate the score base on the length of the name and representation of each letter worth
  names.forEach((name) => {
    for (let i = 0; i < name.length; i++) {
      let person = people.find((p) => p.letter === name[i]);
      //doing some add on
      if (person) {
        console.log(person.score);
        matchingScore += person.score;
      }
    }
  });
  //using the getrandom package that contain value between 0-100 and each time user put in name + name it will give off a number between 0-100 that symbolize the chance of the two people fall in love today
  const thePercentageOfFallInLove = getRandom();
// print the different values, 
//basic response to the user values
//   res.send({ names: names, matchingScore: matchingScore, thePercentageOfFallInLove: thePercentageOfFallInLove });
// });
//doing a basic html layout for displaying 
res.send(`
<html>
  <head>
    <title>Love Calculator</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 20px;
        background-color: #f0f0f0; 
        color: hsl(196, 80%, 80%);
        box-shadow: 5px 5px 10px #888888;
        text-shadow: 2px 2px 4px #ffc0cb;
      }
    </style>
  </head>
  <body>
    <h1>Love Calculator</h1>
    <p>Names: ${names.join(' and ')}</p>
    <p>Matching Score: ${matchingScore}</p>
    <p>Chance of Falling in Love Today: ${thePercentageOfFallInLove}%</p>
  </body>
</html>
`);
});

app.listen(port, () => {
  console.log(`It is working  ${port}`);
});
