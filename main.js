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
var test, test_status, question, choice, choices, chA, chB, chC, chD;
var pos = 0;
var correct = 0;
var questions = [
    ['What is 25 / 5 ?', '4', '7', '5', 'C'],
    ['What is 7 * 3 ?', '24', '21', '32', 'B'],
    ['What is 30 / 3 ?', '10', '8', '12', 'A'],
    ['What is 9 * 9 ?', '79', '84', '81', 'C']
];

function getElem(elem) {
  return document.getElementById(elem);
}
function renderQuestion() {
  test = getElem('test');

  if(pos >= questions.length) {
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>"; 
    getElem("testStatus").innerHTML = "Test Complete";
    pos = 0;
    correct = 0;
    return false;
  }
  testStatus = getElem('testStatus').innerHTML = 'Question '+(pos+1)+' of '+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = '<h3>'+question+'</h3>';
  test.innerHTML += '<input type="radio" name="choices" value="A">';
  test.innerHTML += '<label>'+chA+'</label><br>';
  test.innerHTML += '<input type="radio" name="choices" value="B">';
  test.innerHTML += '<label>'+chB+'</label><br>';
  test.innerHTML += '<input type="radio" name="choices" value="C">';
  test.innerHTML += '<label>'+chC+'</label><br>';
  test.innerHTML += '<button class="submitBtn" onclick="checkAnswer()">Submit</button>';
}
function checkAnswer() {
  choices = document.getElementsByName('choices');

  for(var i = 0; i < choices.length; i++) {
    if(choices[i].checked) {
      choice = choices[i].value;
      // console.log(choice);
    }
  } //for
  if(choice == questions[pos][4]){
      correct++;
    }
  pos++;
  renderQuestion();

}
window.addEventListener("load", renderQuestion, false);



