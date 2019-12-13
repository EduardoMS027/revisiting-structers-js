// course
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])




// making comparasion

var t0 = performance.now();

countUniqueValues([1,2,2,5,7,7,99]);

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");