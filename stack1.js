
   var stack= [];

function StackClassConstructor() {
    var o = Object.create(StackClass);
    
    return o;
}

var StackClass = {

    push: function(element) {
        this.stack.push(element);
    },

    pop: function() {
        return this.stack.pop();
    },

    peek: function() {
        return this.stack[this.stack.length - 1];
    }

}


var st = StackClassConstructor();

st.push('a');
st.push('b');
st.push('c'); 
st.pop();
console.log(st.peek());