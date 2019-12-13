// mine
function countUniqueValues(array)    {
    let i = 0;
    let j = 1;
		let count = 0;

    if(array.length === 0 || array === null)    {
        return 0;
    }
    if(array.length == 1)    {
        return 1;
    }
    if(array.length == 2)    {
        if(array[i] !== array[j])    {
            return 2;
        }   else    {
            return 1;
        }
    }
    while(j <= array.length)  {
        if(array[i] === array[j])    {
            j++;
        }   else{
            count++;
            i = j;
            j++;
        }
    }
    return count;
}


// making comparasion

var t0 = performance.now();

countUniqueValues([1,2,2,5,7,7,99]);

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");