// optimize with regex
function charCount(str)    {
    var obj = {};
    for (var char of str)   {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char))    {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// simplest
function charCountSimples(str) {
    var obj = {};
    for(var i = 0; i < str.length; i++)   {
        if(/[a-z0-9]/.test(char))    {
            if(obj[char] > 0)    {
                obj[char]++;
            }   else    {
                obj[char] = 1;
            }
        }
    }
}

// using alphanumeric code compare
function isAlphaNumeric(char)   {
    var code = char.charCodeAt(0);
    if  ( !(code > 47 && code < 58) &&      // numeric (0-9)
          !(code > 64 && code < 91) &&      // upper alpha (A-Z)
          !(code < 96 && code < 123))    {  // lower alpha (a-z)
            return false;
    }
    return true;
}

// using isAlphaNumeric
function charCountIsAlphaNumeric(str)  {
    var obj = {};
    for(var char of str)   {
        if(this.isAlphaNumeric(char))    {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
}