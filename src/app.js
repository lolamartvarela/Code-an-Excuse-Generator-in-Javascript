/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let getRandomInt1 = Math.floor(Math.random() * who.length);
  let getRandomInt2 = Math.floor(Math.random() * action.length);
  let getRandomInt3 = Math.floor(Math.random() * what.length);
  let getRandomInt4 = Math.floor(Math.random() * when.length);

  return (
    who[getRandomInt1] +
    " " +
    action[getRandomInt2] +
    " " +
    what[getRandomInt3] +
    " " +
    when[getRandomInt4]
  );
};
