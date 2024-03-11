var userInput=document.getElementById("userInput");
var expression='';
function press(i){
expression+=i;
//document.getElementById("userInput").value=i;
userInput.value=expression;
}
function equal(){
    userInput.value=eval(expression);
    expression='';
   expression+=userInput.value;
}
function allClear(){
    expression='';
    userInput.value=0;
}