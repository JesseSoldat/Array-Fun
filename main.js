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
document.write(btns);


