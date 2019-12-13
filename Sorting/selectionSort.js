// 1° Store the first element as the smallest value you've seen so far -    OK
// 2° Compare this item to the next item in the array until you find a smaller number
// 3° If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until
// the end of the array
// 4° If the 'minimum' is not the value (index) you initially began with, swap the two value
// two loops, single condition and then a swap

function selectionSort(arr) {
    let minimum = arr[0];
    console.log('minimum starts with: ' + minimum);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    console.log('minimum ends with: ' + minimum);
}

selectionSort([956, 1000, 569, 965, 418, 848, 539, 102, 883, 272]);