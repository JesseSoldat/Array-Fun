var btns = "";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letterArray = letters.split("");

for(var i = 0; i < 26; i++) {
  var letter = letterArray.shift();

  btns += '<button onclick="alert(\''+letter+'\');">'+letter+'</button>';
}
document.write(btns);