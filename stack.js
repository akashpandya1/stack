
var prompt = require('prompt-sync')();

var stack = [];
var i=0;

while(i<3) {
var data = prompt('Enter stack data:');
stackpush(data);   
i++;    
}

function stackpush(i) {
    stack.push(i);
}


prompt(' stack data after push : ' + stack );

prompt(' stack first added  element : ' + stackFirstElement());

function stackFirstElement() {
  return stack[0];
}

stackLatestElement();

function stackLatestElement() {
    prompt(' stack lastest added  element : ' + stack.pop());
}

stackpop();
 
function stackpop() {
    prompt(' stack pop : ' + stack.pop());
}

