//ALPHABET
var btns = "";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letterArray = letters.split("");

for(var i = 0; i < 26; i++) {
  var letter = letterArray.shift();

    if(i % 2) {
      btns += '<button class="mybtns blue" onclick="alert(\''+letter+'\');">'+letter+'</button>';
      
    } else {
 
    btns += '<button class="mybtns lightblue" onclick="alert(\''+letter+'\');">'+letter+'</button>';
  } 
}
var alpha = document.getElementById('alpha');
alpha.innerHTML = btns;
// document.write(btns);

//QUIZ
var test, test_status, question, choice, choices, chA, chB, chC;
var pos = 0;
var correct = 0;
var questions = [
    ['What is 25 / 5 ?', '4,', '7', '5', '6', 'C'],
    ['What is 7 * 3 ?', '24,', '21', '32', '26', 'B'],
    ['What is 30 / 3 ?', '10,', '8', '12', '9', 'A'],
    ['What is 9 * 9 ?', '79,', '84', '81', '86', 'C']
];
function getElem(elem) {
  return document.getElementById(elem);
}
function renderQuestion() {
  test = getElem('test');
  testStatus = getElem('testStatus').innerHTML = 'Question '+(pos+1)+' of '+questions.length;
}
renderQuestion();


