function bubbleSortNaive(arr) {
    let aux;
    let count = arr.length - 1;
    let operations = 0;

    while (count > 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, (i + 1))
            }
            operations++;
        }
        operations++;
        count--;
    }
    console.log('bubbleSortNaive operations:' + operations);
    return arr;
}

function bubbleSort(arr) {
    let operations = 0;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
            operations++;
        }
        operations++;
    }
    console.log('bubbleSort operations:' + operations);
    return arr;
}

function bubbleSortOptimize(arr) {
    let operations = 0;
    let verifySwap;
    for (let i = arr.length; i > 0; i--) {
        verifySwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                verifySwap = false;
            }
            operations++;
        }
        if (verifySwap) {
            break;
        }
        operations++;
    }
    console.log('bubbleSortOptimize operations:' + operations);
    return arr;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

/* 
console.log(bubbleSortNaive([924, 266, 538, 382, 404, 267, 988, 459, 733, 364]));


console.log(bubbleSort([924, 266, 538, 382, 404, 267, 988, 459, 733, 364]));


console.log(bubbleSortOptimize([924, 266, 538, 382, 404, 267, 988, 459, 733, 364])); */


bubbleSortNaive([285, 197, 757, 949, 11, 798, 951, 290, 488, 305, 136, 915, 57, 946, 869, 448, 629, 909, 328, 617, 957, 323, 851, 978, 470, 719, 682, 689, 875, 303, 235, 60, 467, 907, 168, 966, 47, 321, 320, 975, 834, 43, 210, 270, 794, 991, 449, 549, 747, 890, 223, 770, 653, 925, 300, 571, 700, 115, 274, 854, 900, 483, 92, 98, 74, 542, 408, 176, 996, 194, 278, 995, 434, 315, 364, 962, 263, 369, 716, 158, 814, 152, 591, 529, 598, 942, 382, 671, 555, 868, 164, 905, 596, 418, 491, 17, 493, 552, 935, 816]);

bubbleSort([285, 197, 757, 949, 11, 798, 951, 290, 488, 305, 136, 915, 57, 946, 869, 448, 629, 909, 328, 617, 957, 323, 851, 978, 470, 719, 682, 689, 875, 303, 235, 60, 467, 907, 168, 966, 47, 321, 320, 975, 834, 43, 210, 270, 794, 991, 449, 549, 747, 890, 223, 770, 653, 925, 300, 571, 700, 115, 274, 854, 900, 483, 92, 98, 74, 542, 408, 176, 996, 194, 278, 995, 434, 315, 364, 962, 263, 369, 716, 158, 814, 152, 591, 529, 598, 942, 382, 671, 555, 868, 164, 905, 596, 418, 491, 17, 493, 552, 935, 816]);

bubbleSortOptimize([285, 197, 757, 949, 11, 798, 951, 290, 488, 305, 136, 915, 57, 946, 869, 448, 629, 909, 328, 617, 957, 323, 851, 978, 470, 719, 682, 689, 875, 303, 235, 60, 467, 907, 168, 966, 47, 321, 320, 975, 834, 43, 210, 270, 794, 991, 449, 549, 747, 890, 223, 770, 653, 925, 300, 571, 700, 115, 274, 854, 900, 483, 92, 98, 74, 542, 408, 176, 996, 194, 278, 995, 434, 315, 364, 962, 263, 369, 716, 158, 814, 152, 591, 529, 598, 942, 382, 671, 555, 868, 164, 905, 596, 418, 491, 17, 493, 552, 935, 816]);