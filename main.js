// Objectives
// Memory Add
// Clear Function
// Style it
// Allow calculations to continue on
// BONUS:
// Make a slot machine with javascript
var outputOneHistory = [];
var outputTwoHistory = [];
var outputAnswerHistory = [];
var outputSymbolHistory = [];
function getInputs(){
  var inputOne = parseFloat(document.getElementById('input_1').value);
  var inputTwo = parseFloat(document.getElementById('input_2').value);
  outputOneHistory.push(inputOne.toString());
  outputTwoHistory.push(inputTwo.toString());
  return [inputOne, inputTwo];
}

function undo(){
  outputOneHistory.pop();
  outputTwoHistory.pop();
  outputAnswerHistory.pop();
  outputSymbolHistory.pop();
  setOutput();
  history()
}

function setOutput(){
  if (outputAnswerHistory[outputAnswerHistory.length - 2]){
    document.getElementById('output').innerHTML = outputAnswerHistory[outputAnswerHistory.length - 1] + " Last Answer " +outputAnswerHistory[outputAnswerHistory.length - 2];
  } else if (outputAnswerHistory[outputAnswerHistory.length - 1]){
    document.getElementById('output').innerHTML = outputAnswerHistory[outputAnswerHistory.length - 1];
  } else {
    document.getElementById('output').innerHTML = "";
  }
}

function history(){
  var outputEquation = [];
  for(var i=0; i < outputOneHistory.length; i++){
    // outputOneHistory.each do |i|
    //   i = 0
    //i += 1
    //equation = onehistory[i] + symbolhistory[i] + twohistory[i] + "=" + answerhistory[i]
    var equation = outputOneHistory[i] + outputSymbolHistory[i] + outputTwoHistory[i] + '=' + outputAnswerHistory[i];
    // outputEquation << equation
    outputEquation.push(equation);
    //end
  }
  var output = outputEquation.join('<br />');
  document.getElementById('history_here').innerHTML = output;
}
function clean(){
  outputOneHistory = [];
  outputTwoHistory = [];
  outputAnswerHistory = [];
  outputSymbolHistory = [];
  setOutput();
  history();
}

function add(){
  var inputs = getInputs();
  var sum = inputs[0] + inputs[1];
  outputSymbolHistory.push("+");
  outputAnswerHistory.push(sum);
  setOutput();
}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  outputSymbolHistory.push("-")
  outputAnswerHistory.push(sum);
  setOutput();
}

function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  outputSymbolHistory.push("/");
  outputAnswerHistory.push(sum);
  setOutput();
}

function multiply(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  outputSymbolHistory.push("*");
  outputAnswerHistory.push(sum);
  setOutput();
}
