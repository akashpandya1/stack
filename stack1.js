
  var stack= [];

function StackClassConstructor() {
    var o = Object.create(StackClass);
    
    return o;
}

var StackClass = {

    push: function(element) {
        stack.push(element);
    },

    pop: function() {
        return stack.pop();
    },

    last: function() {
        return stack[stack.length - 1];
    },


    first: function() {
        return stack[0];
    },

    all: function() {
        return stack;
    }
}


var st = StackClassConstructor();
 
st.push('a'); 
st.push('b'); 
st.push('c'); 
console.log(st.all());
st.pop();
console.log(st.last());