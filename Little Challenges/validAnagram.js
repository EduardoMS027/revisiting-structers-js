// frequency counter is the strategy to separete arrays that needs to be compare, in a way that you have
// all the caracters that compose this arrays and you can make comparasion with the frequency of the 
// caracters
function validAnagram   (str1, str2)  {
    if  (str1.length !== str2.length)  {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (const element of str1)  {
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
    }
    for (const element of str2)   {
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
    }

    // should appear all letters separetes and all the counter of this letters 
    // at the frequency counter objects
    console.log('frequencyCounter1: ' + frequencyCounter1);
    console.log('frequencyCounter2: ' + frequencyCounter2);
    // I will loop the first object, but just verify if contains at the second one
    for (let key in frequencyCounter1)  {
        if  (!(key in frequencyCounter2))    {
            return false;
        }
    }
    return true;
}

// ['cinema', 'iceman']