
// Creates a Stack
var Stack = function()  {
  this.count = 0;
  this.storage = {};

  // Adds a value into the end of the stack
  this.push = function(value)  {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and return the value at the end of the stack
  this.pop = function() {
    if (this.count === 0){
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function()  {
    return this.count;
  }

  // Returns the value at the end of the stack
  this.peek = function(value)  {
      return this.storage[this.count - 1]
  }

}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('First stack: ' + myStack.peek());

myStack.pop();
console.log('Second  stack: ' + myStack.peek());

myStack.push('test of string');
console.log(myStack.storage);

console.log('Third  stack: ' + myStack.peek());