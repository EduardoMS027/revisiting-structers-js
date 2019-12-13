// using the Multiple Pointer Pattern to this solution
// the parameter is a array of integer and 
// it's SORTED. That is important, because we are
// using this order array in part of the solution
function sumZero(lstIntegers)  {
    let left = 0;
    let right = lstIntegers.length - 1;
    while   (left < right)  {
        let sum = lstIntegers[left] + lstIntegers[right];
        if  (sum === 0)  {
            return [lstIntegers[left], lstIntegers[right]]
        }   else if (sum > 0)   {
                right--;
        }   else{
                left++;
        }
    }
}

// the ideia is using the sorted array as the reference to get an sum the is equals to zero.