/****************************************************/
// Stacks
// functions push, pop, peek

var letters = [];
var word = 'bob';
var rword = '';

// put the letters of word into stack
for(var i = 0; i < word.length; i++) {
      letters.push(word[i]);
}

// pop off the stack in reverse order
for(var i = 0; i < word.length; i++) {
      rword += letters.pop();
}

if(word === rword)  {
      console.log(word + ' is a palindrome');
} else  {
      console.log(word + ' is not a palindrome');
}
/****************************************************/